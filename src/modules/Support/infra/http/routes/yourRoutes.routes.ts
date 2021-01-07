import { Router } from 'express';

import YourController from '../controller/YourController';

const yourImagesRouter = Router();
const yourController = new YourController();

yourImagesRouter.get('/', yourController.teste);


export default yourImagesRouter;
