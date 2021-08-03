import { CosmosClient } from "@azure/cosmos";

const client = new CosmosClient(process.env.DB_CONNECTION_STRING);
const database = client.database("blog");
const collection = database.container("posts");

const postService = {
    async get() {
        let iterator = collection.items.query("SELECT * FROM c ORDER BY c._ts DESC");
        let { resources } = await iterator.fetchAll();
        return resources;
    },

    async getOne(id: string) {
        let { resource } = await collection.item(id, undefined).read();
        return resource;
    },

    async create(post: object) {
        let { resource } = await collection.items.upsert(post);
        return resource;
    },

    async delete(id: string) {
        let { resource } = await collection.item(id, undefined).delete()
        return resource;
    }
}

export default postService;
