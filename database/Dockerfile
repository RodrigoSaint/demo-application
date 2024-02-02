FROM node:current-alpine3.19 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY migrations ./migrations

FROM astefanutti/scratch-node
COPY --from=builder /app /
ENTRYPOINT ["node", "./node_modules/.bin/node-pg-migrate", "up"]
