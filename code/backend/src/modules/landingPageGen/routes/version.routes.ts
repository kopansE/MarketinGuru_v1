// src/modules/version-management/routes/version.routes.ts
import express from 'express';
import { VersionController } from '../controllers/version.controller';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ComponentState:
 *       type: object
 *       properties:
 *         template:
 *           type: object
 *         text:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *         type:
 *           type: string
 *     Version:
 *       type: object
 *       properties:
 *         versionNumber:
 *           type: number
 *         components:
 *           type: object
 *           properties:
 *             navbar:
 *               $ref: '#/components/schemas/ComponentState'
 *             hero:
 *               $ref: '#/components/schemas/ComponentState'
 *             features:
 *               $ref: '#/components/schemas/ComponentState'
 *             contactForm:
 *               $ref: '#/components/schemas/ComponentState'
 *             footer:
 *               $ref: '#/components/schemas/ComponentState'
 *         timestamp:
 *           type: string
 *           format: date-time
 *         url:
 *           type: string
 */

/**
 * @swagger
 * /api/versions:
 *   get:
 *     summary: Get all versions
 *     responses:
 *       200:
 *         description: List of all versions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Version'
 */
router.get('/', VersionController.getAllVersions);

/**
 * @swagger
 * /api/versions/{versionNumber}:
 *   get:
 *     summary: Get a specific version
 *     parameters:
 *       - in: path
 *         name: versionNumber
 *         required: true
 *         schema:
 *           type: integer
 *         description: Version number to retrieve
 *     responses:
 *       200:
 *         description: Version found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Version'
 *       404:
 *         description: Version not found
 */
router.get('/:versionNumber', VersionController.getVersion);

/**
 * @swagger
 * /api/versions:
 *   post:
 *     summary: Create a new version
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               components:
 *                 type: object
 *                 properties:
 *                   navbar:
 *                     $ref: '#/components/schemas/ComponentState'
 *                   hero:
 *                     $ref: '#/components/schemas/ComponentState'
 *                   features:
 *                     $ref: '#/components/schemas/ComponentState'
 *                   contactForm:
 *                     $ref: '#/components/schemas/ComponentState'
 *                   footer:
 *                     $ref: '#/components/schemas/ComponentState'
 *     responses:
 *       201:
 *         description: Version created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Version'
 *       400:
 *         description: Invalid request body
 */
router.post('/', VersionController.createVersion);

export { router as versionRoutes };

