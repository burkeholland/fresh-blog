import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import postService from "../services/postService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const id = await postService.delete(req.params.id);
    context.res = {
        body: id
    } 
};

export default httpTrigger;