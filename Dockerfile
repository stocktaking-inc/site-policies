FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/dist ./dist
RUN chmod -R 755 /app/dist
EXPOSE 4321
CMD ["http-server", "dist", "-p", "4321", "-a", "0.0.0.0", "--gzip", "--brotli"]
