# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN cd vuejs && npm install && npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/vuejs/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
