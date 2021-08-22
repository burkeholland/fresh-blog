import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import postService from "../services/postService";
import * as MarkdownIt from "markdown-it";

const mdParser = new MarkdownIt();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let posts = await postService.get();
    posts.map(post => {
        post.bodyHTML = mdParser.render(post.body);
    });
    context.res = {
        body: posts
    } 
};

export default httpTrigger;