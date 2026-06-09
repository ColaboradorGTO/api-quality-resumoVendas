import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

class ResumoVendasContigenciaControllers {

  async getVendasContigenciaAgrupado(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
 
      const apiUrl = `${url}/api/dashboard/venda/venda-contingencia-agrupado-uf.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}` 
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por mes: no controller Vendas", error);
      throw error;
    }
  }

  async getVendasContigenciaAgrupadoUf(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/dashboard/venda/venda-contingencia-agrupado-uf.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasContigencia(req, res) {
    let { dataInicio, dataFim, page, pageSize } = req.query;

    dataInicio = dataInicio ? dataInicio : '';
    dataFim = dataFim ? dataFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/dashboard/venda/lista-venda-contingencia.xsjs?dataInicio=${dataInicio}&dataFim=${dataFim}&page=${page}`
  
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }
  
}

export default new ResumoVendasContigenciaControllers();
