import { Router } from 'express';
import ResumoIntegracoesEnviadasMindsetControllers from '../controller/index.js';

const routesIntegracoesEnviadasMindset = new Router();

routesIntegracoesEnviadasMindset.get('/totais-gerais-integracoes', ResumoIntegracoesEnviadasMindsetControllers.getTotaisGeraisIntegracoes)
routesIntegracoesEnviadasMindset.get('/totais-integracoes-por-tipo', ResumoIntegracoesEnviadasMindsetControllers.getTotaisIntegracoesMindsetPorTipo)
routesIntegracoesEnviadasMindset.get('/lista-integracoes', ResumoIntegracoesEnviadasMindsetControllers.getListaIntegracoesMindset)
routesIntegracoesEnviadasMindset.get('/lista-detalhes-integracao', ResumoIntegracoesEnviadasMindsetControllers.getListaIntegracoesMindsetDetalhes)

export default routesIntegracoesEnviadasMindset;