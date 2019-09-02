# [Famished](https://famished.sharmaavin.now.sh/)
This project was built in [React](https://reactjs.org/).

## Requirements

You just need Node.js installed on your environment. Please visit the official [Node](https://nodejs.org) website to download the latest version of node.

## Installation

```
git clone https://github.com/avin-sharma/famished.git
cd famished
npm install
```

## Config

After you have installed the dependencies, you will need to create a Yelp app to generate an api key. You then need to create a ```.env``` file and enter your Yelp app API key as such
```
REACT_APP_API_KEY = <Your Key>
```


## Run and develop

```
npm start
```

## Deploy

You can create a deploy build by executing
```
npm run build
```

You also have to make sure that your API key environment variable exists and is accessible. One of the options is to deploy it on [Zeit Now](https://zeit.co/) and reference their [docs](https://zeit.co/docs/v2/build-step#using-environment-variables-and-secrets) for environment variables.