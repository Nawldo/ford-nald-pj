/**
 * @type Usuario
 * @description
 * Define a estrutura de um objeto de usuário retornado pela API de login.
 */
export type Usuario = {
  id: number;
  nome: string; // Corresponde ao 'nome' retornado pela API
  email: string; // Corresponde ao 'email' retornado pela API
  // A senha não é incluída aqui por segurança, pois não é retornada após o login.
};
