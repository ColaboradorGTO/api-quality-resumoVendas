import { Router } from 'express';

const routes = Router();

import routesVendasContigencia from '../ResumoVendasContigencia/routes/index.js';
import ResumoVendasControllers from '../ResumoVendasHoraData/routes/resumoVendas.js';
import routesIntegracoesEnviadasMindset from '../ResumoIntegracoesEnviadasMindset/routes/index.js';


routes.use(routesVendasContigencia)
routes.use(ResumoVendasControllers)
routes.use(routesIntegracoesEnviadasMindset)

export default routes;