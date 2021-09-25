# Fresh Blog!!

A sample application demonstrating the features of Azure Static Web Apps

## Prerequisites

- Node LTS
- Azure Functions CLI
- Azure Static Web Apps CLI
- Azure Databases extension
- Azure Static Web Apps extension

## Project Setup

1.  Fork this repo

1.  Open in VS Code

1.  Run `npm setup`. This command adds some configuration files to the `api` folder.

1.  Create a new Cosmos DB database called "blog" with a single collection called "posts".
    
    https://user-images.githubusercontent.com/686963/120527082-8dbb2280-c39f-11eb-9f77-1b2ddd112549.mp4

1.  Right-click the new database and select "Copy connection string".

1.  Paste the connection string into the `/api/local.settings.json` file like so...

    ```json
    {
      "IsEncrypted": false,
      "Values": {
        "AzureWebJobsStorage": "",
        "FUNCTIONS_WORKER_RUNTIME": "node",
        "DB_CONNECTION_STRING": "AccountEndpoint=https://your-database-name.documents.azure.com:443/;AccountKey=7gs3n33Psrl6VyZmf6U3kvT4sPwnR5dHNfrZqJvMsdfgbMrxGlga3wgmqt6w=="
      }
    }
    ```

## Running Locally

1. Start the Static Web Apps Emulator with `npm run local`.

1. Visit the application running on http://localhost:4280

## Deployment

1. Use the Static Web Apps extension for VS Code to create a new site.
   
    https://user-images.githubusercontent.com/686963/120531498-4edb9b80-c3a4-11eb-9f89-eaad7f307788.mp4

It make take a few minutes for your site to build and deploy.

1. Add your database connection string to your Static Web App. The `local.settings.json` file is not deployed with your project.

   https://user-images.githubusercontent.com/686963/120531529-58fd9a00-c3a4-11eb-8fcf-2a4a96c1fc04.mp4

Some change


