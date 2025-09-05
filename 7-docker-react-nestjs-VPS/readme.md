> **Note:** This project is intended to run in production.  
> For development, you can `cd` into the `backend` and `frontend` folders and run them independently — Docker is not required in that case.

## Deploy

- copy files: `scp .env.backend docker-compose.yml [user]:[IPAdress]:/home/ubuntu`
- reverse proxy: http://domain-name.com:81

### docker

- deploy: - `./deploy.sh`
- pull image from registry: `docker pull localhost:5000/backend:1.0.0 && docker pull localhost:5000/frontend:1.0.0`
- run registry image: `docker run -d -p 5000:5000 --name registry registry:2`
- start/stop registry image: `docker start registry` | `docker stop registry`
- logs: `docker compose logs -f`

## Database

### run commands in postgres container

- `docker exec -it <container_name> psql -U <username> -d <database_name>`
- delete all tables:
  ```
    DO $$ DECLARE
      r RECORD;
    BEGIN
      -- Drop all tables
      FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
      END LOOP;
    END $$;
  ```
- show all tables: `\dt`

## Improvements

1. deploy to a github registry instead of registry:2
2. implement "watchtower" to pull automatically
3. add a github actions "yml" CI/CD file to build/push images on "pushing" to main
