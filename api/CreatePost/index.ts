import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import postService from "../services/postService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const post = req.body;
    const result = await postService.create(post);
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };

};

export default httpTrigger;