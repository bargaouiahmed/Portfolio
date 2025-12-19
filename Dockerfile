## Multi-stage Dockerfile for building the Vite React app and serving with `serve` on port 3003

# --- builder ---
FROM node:18-alpine AS builder
WORKDIR /app

# Install build dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent

# Copy source and build
COPY . .
RUN npm run build

# --- runtime ---
FROM node:18-alpine AS runner
WORKDIR /app

# Install `serve` to serve static build output
RUN npm install -g serve --silent

# Copy built files from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3003

# Run `serve` to serve the static files on port 3003
CMD ["serve", "-s", "dist", "-l", "3003"]
