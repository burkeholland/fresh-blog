import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import storageService from "../services/storageService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const imageUrl = await storageService.upload(req);

  context.res = {
    body: { imageUrl }
  };
}

export default httpTrigger;