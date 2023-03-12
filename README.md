# Using ConfigCat with Redis

Using ConfigCat and Redis together

## How to use run this app

### Install the dependencies

```sh
npm install
```

### Setup Redis

1. Pull the latest Redis docker image:

```sh
docker pull redis
```

2. Run the container

```sh
docker run --name container-redis -p 6379:6379 -d redis
```

### Start the console application

```sh
npm start
```
