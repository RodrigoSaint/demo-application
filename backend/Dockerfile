FROM node:current-alpine3.19 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY index.js ./
ENTRYPOINT ["node", "index.js"]
