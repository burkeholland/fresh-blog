import { HttpRequest } from "@azure/functions"
import { BlobServiceClient, StorageSharedKeyCredential, newPipeline } from "@azure/storage-blob";
import * as streamifier from 'streamifier';
import * as multipart from "parse-multipart";

const STORAGE_ACCOUNT: string = process.env.STORAGE_ACCOUNT;
const STORAGE_KEY: string = process.env.STORAGE_KEY;
const STORAGE_CONTAINER: string = process.env.STORAGE_CONTAINER;
const STORAGE_URL: string = `https://${STORAGE_ACCOUNT}.blob.core.windows.net`;
  
const storageService = {
	async upload(req: HttpRequest) {
		// Get the image data from the request
		const bodyBuffer = Buffer.from(req.body);

		// use the parse-multipart library to parse the multipart form data
		const boundary =  multipart.getBoundary(req.headers['content-type']);
		const parts = multipart.Parse(bodyBuffer, boundary);

		const fileData = parts[0].data;
		// Append a date string to the front to make every file name unique
		const fileName = Date.now() + parts[0].filename;
		const contentType = parts[0].type;

		// Set auth credentials for upload
		const sharedKeyCredential = new StorageSharedKeyCredential(STORAGE_ACCOUNT, STORAGE_KEY);
		const pipeline = newPipeline(sharedKeyCredential);

		// Upload the file
		const blobServiceClient = new BlobServiceClient(STORAGE_URL, pipeline);
		const containerClient = blobServiceClient.getContainerClient(STORAGE_CONTAINER);
		const blockBlobClient = containerClient.getBlockBlobClient(fileName);
		const uploadBlobResopnse = await blockBlobClient.uploadStream(streamifier.createReadStream(new Buffer(fileData)), fileData.length, 5, {
			blobHTTPHeaders: {
				blobContentType: contentType
			}
		});

		return `${STORAGE_URL}/${STORAGE_CONTAINER}/${fileName}`
	}
}

export default storageService;