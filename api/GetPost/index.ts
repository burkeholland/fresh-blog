import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import postService from "../services/postService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const post = await postService.getOne(req.params.id);
    context.res = {
        body: post
    } 
};

export default httpTrigger;