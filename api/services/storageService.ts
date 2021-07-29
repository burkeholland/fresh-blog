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
		const bodyBuffer = Buffer.from(req.body);
		const boundary =  multipart.getBoundary(req.headers['content-type']);
		const parts = multipart.Parse(bodyBuffer, boundary);

		const filedata = parts[0].data;
		const filename = Date.now() + parts[0].filename;
		const contentType = parts[0].type;

		const sharedKeyCredential = new StorageSharedKeyCredential(STORAGE_ACCOUNT, STORAGE_KEY);
		const pipeline = newPipeline(sharedKeyCredential);
		const blobServiceClient = new BlobServiceClient(STORAGE_URL, pipeline);
		const containerClient = blobServiceClient.getContainerClient(STORAGE_CONTAINER);
		const blockBlobClient = containerClient.getBlockBlobClient(filename);
		const uploadBlobResopnse = await blockBlobClient.uploadStream(streamifier.createReadStream(new Buffer(filedata)), filedata.length, 5, {
				blobHTTPHeaders: {
						blobContentType: contentType
				}
		});

		return 
	}
}

export default storageService;