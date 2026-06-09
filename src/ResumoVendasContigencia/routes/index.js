import { Router } from 'express';
import ResumoVendasContigenciaControllers from '../controller/index.js';

const routesVendasContigencia = new Router();

routesVendasContigencia.get('/vendas-contigencia-agrupado', ResumoVendasContigenciaControllers.getVendasContigenciaAgrupado)
routesVendasContigencia.get('/vendas-contigencia-agrupado-uf', ResumoVendasContigenciaControllers.getVendasContigenciaAgrupadoUf)
routesVendasContigencia.get('/lista-venda-contingencia', ResumoVendasContigenciaControllers.getListaVendasContigencia)

export default routesVendasContigencia;