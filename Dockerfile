FROM node:16.16.0 AS builder

WORKDIR /app

COPY package*.json ./	

RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:alpine
RUN mkdir -p /var/www/sorting

WORKDIR /var/www/sorting

COPY --from=builder /app/build .

RUN mkdir ./Sorting; cp -r ./static ./Sorting/static

COPY nginx.conf /etc/nginx/conf.d/default.conf

