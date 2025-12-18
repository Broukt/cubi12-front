# Stage 1: Build environment
FROM node:18-alpine AS build

# Declare build argument for backend URL
ARG backend_url

# Set environment variable for React build
ENV REACT_APP_API_URL=$backend_url

WORKDIR /app

# Copy package files first (better layer caching)
COPY package*.json ./

# Use npm ci for faster, reproducible builds in CI/CD
RUN npm ci --silent

# Copy source code
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Production environment
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
