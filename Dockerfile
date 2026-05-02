
FROM node:18-alpine
WORKDIR /app
COPY src/swagger ./src/swagger
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["node", "src/server.js"]
