import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

export const UsersServices = {
  getlista: () =>
    fetch(Api.baseURL + "/usuario", { method: "GET" }).then(parseResponse),
  getPublicacoes: () =>
    fetch(Api.baseURL + "/publicacoes?_sort=id&_order=desc", { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.baseURL + `/usuario/${id}`, { method: "GET" }).then(
      parseResponse
    ),
    updatePubliById: (id, publicacao) =>
    fetch(
    Api.baseURL + `/publicacoes/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(publicacao),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    ).then(parseResponse),
    deletePublicacaoById: (id) =>
    fetch(Api.baseURL + `/publicacoes/${id}`, { method: "DELETE" }).then(
      parseResponse
    ),
  // createPubli: () =>
  //   fetch(Api.baseURL + "/publicacoes", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     mode: "cors",
  //     body: JSON.stringify({
  //       texto: "",
  //       usuarioId: 1,
  //     }),
  //   }),
};

/*Pesquisa por nome => http://localhost:3000/usuario?nome_like=(valor que o usuario vai adicionar)
get publicacoes desc => http://localhost:3000/publicacoes?_sort=id&_order=desc  
get publicacoes => http://localhost:3000/usuario/(id do usuario)?_embed=publicacoes
*/
