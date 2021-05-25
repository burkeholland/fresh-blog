import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import postService from "../services/postService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const posts = await postService.get();
    context.res = {
        body: posts
    } 
};

export default httpTrigger;