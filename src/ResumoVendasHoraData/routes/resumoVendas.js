import { Router } from 'express';
import ResumoVendasControllers from '../controllers/index.js';

const routes = new Router();

routes.get('/vendas-total-mes', ResumoVendasControllers.getListaVendasTotalMes)
routes.get('/vendas-total-mes-ano-passado', ResumoVendasControllers.getListaVendasTotalMes)
routes.get('/vendas-total-loja-hora', ResumoVendasControllers.getListaVendasTotalLojaHora)
routes.get('/vendas-total-loja-hora-ano-passado', ResumoVendasControllers.getListaVendasTotalLojaHoraAnoPassado)
routes.get('/vendas-total-to', ResumoVendasControllers.getListaVendasTotalTO)
routes.get('/vendas-total-freecenter', ResumoVendasControllers.getListaVendasTotalFreecenter)
routes.get('/vendas-total-magazine', ResumoVendasControllers.getListaVendasTotalMagazine)

export default routes;