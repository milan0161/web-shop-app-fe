FROM node:18-alpine as build

WORKDIR /usr/angular-app

COPY . /usr/angular-app

RUN npm ci

RUN npm run build

FROM nginx:latest as deploy

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/angular-app/dist/real-estate-app-frontend /usr/share/nginx/html

EXPOSE 80

#ENTRYPOINT [ "nginx", "-g", "deamon off;" ]
