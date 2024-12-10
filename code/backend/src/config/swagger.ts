import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Landing Page Version Management API',
      version: '1.0.0',
      description: 'API endpoints for managing landing page versions'
    },
    servers: [
      {
        url: '/api',
        description: 'Local Development API'
      }
    ],
  },
  apis: ['./src/modules/version-management/routes/*.ts'] // files containing annotations as per OpenAPI Specification
};

export default swaggerOptions;