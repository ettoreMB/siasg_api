import { Router } from 'express';
import { ComprasController } from '../../../../modules/markets/UseCases/ComprasUseCases/ComprasController';

const router = Router();

const comprasController = new ComprasController()
router.get('/compras', comprasController.handle)
export { router };