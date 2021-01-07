import { Router } from 'express';
import yourRoutesRouter from '@modules/Support/infra/http/routes/yourRoutes.routes';

const routes = Router();

routes.use('/', yourRoutesRouter);


export default routes;
