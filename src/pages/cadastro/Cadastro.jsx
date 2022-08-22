import "./Cadastro.css";
import { useState } from "react";
import { Api } from "../../helpers/Api";
import userEvent from "@testing-library/user-event";

function Cadastro() {
  const [newUser, setnewUser] = useState();
    // vai receber os valores dos inputs

    // const form{
    //   nome: newUser?.nome ?? "",
    //   nickname: newUser?.nickname ?? "",
    // }

    const handleChange = (event, name) => {
      setnewUser({...newUser, [name]: event.target.value})
    }

  const { nome, nickname, link_img, senha, descricao } = newUser;

  
  const create = async (newUser) => {
    const response = await fetch(Api.baseURL + "/usuario", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
     
        nome: newUser.nome,
        nickname: newUser.nickname,
        link_img: newUser.link_img,
        senha: newUser.senha,
        descricao: newUser.descricao,
      }),
    });
    setnewUser(response); // setUpdateList(response); //((prev) => !prev)
  };

  return (
    <div className="tela-de-cadastro">
      <img
        className="nome-aplicacao"
        src="https://th.bing.com/th/id/R.fbfa91a682683bcdf85a09069002749e?rik=PwzFvQwdMzthNw&pid=ImgRaw&r=0"
        alt="foto do login da aplicação"
      />
      <h1>
        Faça seu cadastro no <span className="pink__font">Orkut</span>
      </h1>
      <form
        className="form__cadastro"
        onSubmit={(event) => {
          event.preventDefault();
          create(newUser);
          console.log("form enviado");
        }}
      >
        <label>Nome</label>
        <input
          placeholder="Seu nome"
          id="nome"
          type="text"
          value={nome}
          onChange={(event) => handleChange(event, "nome")}
          //onChange={(event) => setnewUser(event.target.value)}
        />
        <label>Nome de Usuário</label>
        <input
          placeholder="Nome de usuário"
          id="nickname"
          type="text"
         
          
          onChange={(event) => handleChange(event, "nickname")}
        />
        {/* <label>Data de Nascimento</label>
        <input
          type="date"
          placeholder="11/04/2002"
          id="nome"
          //type="text"
          value={newUser.nome}
          onChange={(event) => setnewUser(event, "nome")}
        /> */}
        <label>Descrição</label>
        <input
          placeholder="Fale algo sobre você"
          id="descricao"
          type="text"
          // value={newUser.descricao}
          onChange={(event) => handleChange(event, "descricao")}
        />
        <label>Foto</label>
        <input
          placeholder="Link da foto"
          id="foto"
          type="text"
          // value={newUser.foto}
          onChange={(event) => handleChange(event, "foto")}
        />
        <label>Senha</label>
        <input
          placeholder="Mínimo de 8 caracteres"
          id="senha"
          type="text"
          // value={newUser.senha}
          onChange={(event) => handleChange(event, "senha")}
        />
        <button type="submit" className="button-cadastrar">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
