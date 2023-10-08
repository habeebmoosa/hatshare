# HatShare - A platform for sharing files with the help of url links

## Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>
HatShare is a platform for sharing files with the help of url links. It is a web application that allows users to upload files and share them with others. The application is built using NodeJs.The application is currently in development and is not yet ready for production.

## Getting Started <a name = "getting_started"></a>
To get started with the project, clone the repository and install the dependencies.
```
git clone <repo_url>
cd hatshare
npm install
```
Create a .env file in the api directory and add the following environment variables.
```
MONGO_URI=<your_mongodb_uri>
APP_BASE_URL=<your_app_base_url>
PORT=<your_port_number>
```

Create a .env file in the client directory and add the following environment variables.

```
VITE_API_BASE_URL=<your_api_base_url>
```

To start the server, run the following command.
```
cd api
npm run dev
```
To start the client, run the following command.
```
cd client
npm run dev
```
## Usage <a name = "usage"></a>
The application is currently in development and is not yet ready for production.