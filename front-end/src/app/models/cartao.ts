
/**
 * @type Veiculo
 * @description
 * Define a estrutura de um objeto de veículo retornado pela API na rota '/vehicles'.
 * Nomes de propriedades alinhados com a API (sem acentos).
 */
export type Veiculo = {
  id: number;
  vehicle: string; // Corresponde ao 'vehicle' da API (sem acento)
  volumetotal: number;
  connected: number; // Corresponde ao 'connected' da API (sem acento)
  softwareUpdates: number; // Corrigido o erro de digitação 'softwere'
  vin: string; // Corresponde ao 'vin' da API
  img: string; // Corresponde ao 'img' da API
};

/**
 * @type VehicleData
 * @description
 * Define a estrutura de um objeto de dados detalhados de veículo retornado pela API na rota '/vehicleData'.
 */
export type VehicleData = {
  id: number;
  odometro: number;
  nivelCombustivel: number;
  status: string;
  lat: number;
  long: number;
};
