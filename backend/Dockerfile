FROM node:current-alpine3.19 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY index.js ./

FROM astefanutti/scratch-node
COPY --from=builder /app /
ENTRYPOINT ["node", "index.js"]
