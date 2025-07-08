# Stage 1: Build React app with Vite
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .

# Pass environment variables (used at build time only)
ARG VITE_BASE_API_URL
ARG VITE_ENV
ENV VITE_BASE_API_URL=${VITE_BASE_API_URL}
ENV VITE_ENV=${VITE_ENV}

# Build the Vite project
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:1.25-alpine

# Copy custom nginx config
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# Clean default nginx content and add your build output
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
