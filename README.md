# Mpox-Tracker

![Showcase Image](https://i.ibb.co/TMzW5T3/Screenshot-2024-08-23-012109.png)

Keep tabs on the mpox virus with this real-time tracker built using Next.js (frontend), Node.js (backend) and Docker. Get the latest stats and insights with a smooth, user-friendly experience.

## Getting Started
### Prerequisites

- Node.js (version 18 or higher)
- Docker

### Installation
1. Clone the repo

```sh

git clone https://github.com/0xBitBuster/mpox-tracker.git

```

2. Enter your Server Configuration in `docker-compose.dev.yaml` (development), `docker-compose.yaml` (production) and `next.config.mjs`


### Usage
To start the server in development mode, run:
```bash
docker compose -f docker-compose.dev.yaml up --build
```
To run the server in production mode, run:
```bash
docker compose up --build
```

* In development, the server runs on following ports: `3000` (frontend) and `4000` (backend)

* In production, the server runs on following ports: `80` (http), `81` (nginx proxy manager), `443` (https)

* In production, after you started the server, you need to configure the nginx proxy whilst redirect all frontend ("/") traffic to `http(s)://frontend:3000` and all backend ("/api/*") traffic to `http(s)://backend:4000`. 

Default Nginx Proxy Manager credentials are "admin@example.com" (Email) and "changeme" (Password)
Default Admin Website is located at "/admin" and the default password is "changeme"
