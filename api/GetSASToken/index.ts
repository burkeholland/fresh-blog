import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { BlobServiceClient, StorageSharedKeyCredential, newPipeline } from "@azure/storage-blob";

const streamifier = require('streamifier');
const multipart = require('parse-multipart');

const STORAGE_ACCOUNT = process.env.STORAGE_ACCOUNT;
const STORAGE_KEY = process.env.STORAGE_KEY;
const STORAGE_CONTAINER = process.env.STORAGE_CONTAINER;
const STORAGE_URL = `https://${STORAGE_ACCOUNT}.blob.core.windows.net`;

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const bodyBuffer = Buffer.from(req.body);
  const boundary = multipart.getBoundary(req.headers['content-type']);
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

  context.res = {
    body: { imageUrl: `${STORAGE_URL}/${STORAGE_CONTAINER}/${filename}` }
  };
}

export default httpTrigger;