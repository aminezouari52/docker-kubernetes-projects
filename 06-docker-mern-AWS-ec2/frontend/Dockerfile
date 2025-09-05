FROM node AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

RUN echo "REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL" > .env

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
