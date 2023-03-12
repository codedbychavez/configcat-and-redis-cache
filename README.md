# configcat-and-redis-cache
Using ConfigCat and Redis together

## How to use run this app

1. Install the dependencies

```sh
npm install
```

2. Setup Redis

a. Pull the latest Redis docker image:

```sh
docker pull redis
```

b. Run the container

```sh
docker run --name container-redis -p 6379:6379 -d redis
```

3. Start the console application

```sh
npm start
```
