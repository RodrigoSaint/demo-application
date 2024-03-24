FROM node:current-alpine3.19 as builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM busybox:1.35
WORKDIR /home/static
EXPOSE 3000
COPY --from=builder app/dist .
CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]
