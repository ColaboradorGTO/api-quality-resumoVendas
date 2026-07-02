import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

class ResumoIntegracoesEnviadasMindsetControllers {

  async getTotaisGeraisIntegracoes(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = `${url}/api/dashboard/integracoes/totais-gerais-integracoes-mindset-por-mes-dia.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro getTotaisGeraisIntegracoes", error);
      throw error;
    }
  }

  async getTotaisIntegracoesMindsetPorTipo(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = `${url}/api/dashboard/integracoes/totais-integracoes-mindset-por-tipo-mes-dia.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro getTotaisIntegracoesMindsetPorTipo", error);
      throw error;
    }
  }

  async getListaIntegracoesMindset(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = `${url}/api/dashboard/integracoes/lista-integracoes-mindset.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro getListaIntegracoesMindset", error);
      throw error;
    }
  }

    async getListaIntegracoesMindsetDetalhes(req, res) {
    let { id, page, pageSize } = req.query;

    id = id ? id : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = `${url}/api/dashboard/integracoes/lista-detalhes-integracao-mindset.xsjs?id=${id}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro getListaIntegracoesMindset", error);
      throw error;
    }
  }


}

export default new ResumoIntegracoesEnviadasMindsetControllers();
