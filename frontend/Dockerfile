FROM node:current-alpine3.19 as builder
WORKDIR /app
COPY . ./
RUN npm install
CMD ["npm", "run", "build"]

FROM busybox:1.35
WORKDIR /home/static
COPY --from=builder /app/dist .
CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]
