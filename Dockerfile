# Use an official Node.js runtime as the base image
FROM node:18.14.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Expose the port your app runs on
EXPOSE 4200

# Start the app
CMD ["npm", "start"]
