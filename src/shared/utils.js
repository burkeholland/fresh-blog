// const {
//   BlobServiceClient,
//   AnonymousCredential
// } = require("@azure/storage-blob");

// // this function uploads a video to Azure Stoage using the Azure Storage JavaScript SDK
// const utils = {
//   async uploadImage(image) {
//     // get the token and container info for uploading
//     const response = await fetch(`api/token${image.name}`);
//     const json = await response.json();
//     const { token, account, container } = json;

//     const blobServiceClient = new BlobServiceClien(
//       `https://${account}.blob.core.windows.net?${token}`,
//       new AnonymousCredential()
//     );

//     const containerClient = blobServiceClient.getContainerClient(container);
//     const blockBlobClient = containerClient.getBlockBlobClient(image.name);
//     const uploadBlobResponse = await blockBlobClient.uploadBrowserData(image, {
//       blobHTTPHeaders: {
//         blobContentType: image.type
//       }
//     });
//     console.log(
//       `Upload block blob ${container} successfully`,
//       uploadBlobResponse.requestId
//     );

//     return `https://${account}.blob.core.windows.net/${container}/${image.name}`;
//   }
// };

// // export default utils;
