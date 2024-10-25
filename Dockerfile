FROM node:alpine AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY package.json ./ 
COPY package-lock.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
