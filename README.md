# Full-Stack Application Documentation

## Overview
This project is a full-stack application that includes:
- A **React** frontend.
- A **NestJS** backend.
- A **JSON-Server** database.

### Ports Configuration
- **Frontend (React)**: Runs on [http://localhost:3002](http://localhost:3002).
- **Backend (NestJS)**: Runs on [http://localhost:3001](http://localhost:2001).
- **Database (JSON-Server)**: Runs on [http://localhost:3000](http://localhost:3000).

---

## Frontend: React Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`
Runs the app in development mode. Open [http://localhost:3002](http://localhost:3002) to view it in the browser. The page will reload if you make edits.

#### `yarn test`
Launches the test runner in the interactive watch mode. Refer to the [testing documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more details.

#### `yarn build`
Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance. Refer to the [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for more details.

#### `yarn eject`
**Note: This is a one-way operation. Once you `eject`, you can’t go back!**

### Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React Documentation](https://reactjs.org/).

---

## Backend: NestJS Application

[NestJS](https://nestjs.com/) is a progressive Node.js framework for building efficient and scalable server-side applications.

### Setup

#### Install dependencies:
```bash
yarn install
```

#### Compile and run the project:
```bash
# Development mode
yarn run start

# Watch mode
yarn run start:dev

# Production mode
yarn run start:prod
```

#### Run tests:
```bash
# Unit tests
yarn run test

# End-to-end tests
yarn run test:e2e

# Test coverage
yarn run test:cov
```

### Deployment
For deployment guides, check out the [NestJS Deployment Documentation](https://docs.nestjs.com/deployment).

---

## Database: JSON-Server

The project uses a JSON-Server as the database, running on [http://localhost:3000](http://localhost:3000).

### Setup
#### Install JSON-Server:
```bash
npm install -g json-server
```

#### Run the server:
```bash
json-server --watch db.json --port 3000
```

---

## How to Use
1. Start the database:
   ```bash
   json-server --watch db.json --port 3000
   ```
2. Start the backend:
   ```bash
   yarn run start:dev
   ```
3. Start the frontend:
   ```bash
   yarn start
   ```

You can now access the application by navigating to [http://localhost:3002](http://localhost:3002).

---

## License
This project is licensed under the MIT License. Refer to the `LICENSE` file for details.

# Made With 🥔 By Luis.H
