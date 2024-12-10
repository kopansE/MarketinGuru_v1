import express from 'express';
import { VersionController } from '../version.controller';

const router = express.Router();

/**
 * @openapi
 * tags:
 *   name: Versions
 *   description: API endpoints for managing landing page versions
 * 
 * /api/versions:
 *   get:
 *     tags: [Versions]
 *     summary: Get all versions
 *     description: Retrieve all saved landing page versions
 *     responses:
 *       200:
 *         description: A list of landing page versions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   versionNumber:
 *                     type: number
 *                   components:
 *                     type: object
 *                   timestamp:
 *                     type: string
 *                   url:
 *                     type: string
 *   post:
 *     tags: [Versions]
 *     summary: Save a new version
 *     description: Save a new landing page version with components
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               components:
 *                 type: object
 *     responses:
 *       201:
 *         description: Version successfully created
 * 
 * /api/versions/{versionNumber}:
 *   get:
 *     tags: [Versions]
 *     summary: Get specific version
 *     description: Retrieve a specific landing page version by its number
 *     parameters:
 *       - in: path
 *         name: versionNumber
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the version to get
 *     responses:
 *       200:
 *         description: The requested version
 *       404:
 *         description: Version not found
 * 
 * /api/versions/pages:
 *   post:
 *     tags: [Pages]
 *     summary: Save a new page
 *     description: Save a landing page with a unique name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - components
 *               - pageName
 *             properties:
 *               components:
 *                 type: object
 *               pageName:
 *                 type: string
 *                 description: Unique name for the page
 *     responses:
 *       201:
 *         description: Page successfully saved
 *       400:
 *         description: Invalid request or page name already exists
 * 
 *   get:
 *     tags: [Pages]
 *     summary: Get all saved pages
 *     description: Retrieve all saved landing pages
 *     responses:
 *       200:
 *         description: A list of saved pages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   versionNumber:
 *                     type: number
 *                   components:
 *                     type: object
 *                   pageName:
 *                     type: string
 *                   url:
 *                     type: string
 *                   timestamp:
 *                     type: string
 */

router.get('/:versionNumber', VersionController.getVersion);
router.post('/', VersionController.createVersion);
export { router as versionRoutes };
