// src/config/swagger.ts
import { Options } from 'swagger-jsdoc';
import path from 'path';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Landing Page Version Management API',
      version: '1.0.0',
      description: 'API endpoints for managing landing page versions',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  },
  apis: [path.join(__dirname, '../modules/version-management/routes/*.ts')], // Updated path
};

export default swaggerOptions;