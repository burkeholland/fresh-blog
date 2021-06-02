# Fresh Blog

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

    ![](media/create-database.mp4)

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

1. Run the frontend with `npm start`. Note that the app is configured **not** to open a browser window as React apps normally do.

1. Start the Static Web Apps Emulator with `npm run local`.

1. Visit the application running on http://localhost:4280

## Deployment

1.
