import "../home/Home.css";
import { useState } from "react";
import Header from "../../components/Header/Header";
import ListUsers from "../../components/ListUsers/ListUsers";
import Publicacoes from "../../components/Publicacoes/Publicacoes";
import Footer from "../../components/Footer/Footer";
import { UsersServices } from "../../services/UsersService";
import { Api } from "../../helpers/Api";

function Home() {
  const [publicacoes, setPublicacoes] = useState([]);
  const [newPublic, setnewPublic] = useState();

  const create = async () => {
    const response = await fetch(Api.baseURL + "/publicacoes", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        texto: newPublic,
        usuarioId: 1,
      }),
    });
    setnewPublic(response); // setUpdateList(response); //((prev) => !prev)
  };

  const handlerCreatePublic = async () => {
    if (newPublic) {
      await create(newPublic);
      document.querySelector(".Modal--create--overlay").style.display = "flex";
      setTimeout(() => {
        document.querySelector(".Modal--create--overlay").style.display =
          "none";
      }, 3e3);
    }
  };

  UsersServices.getPublicacoes().then(setPublicacoes);

  return (
    <div className="home">
      <div className="Modal--create--overlay">
        <div className="Modal--create">
          <i className="bi bi-info-circle"></i>
          <p>Recado Publicado com sucesso!</p>
        </div>
      </div>
      <Header />
      <div className="nova-publicacao">
        <div className="nova-publicacao-container">
          <img
            className="foto-perfil"
            src="https://th.bing.com/th/id/R.136f218ca666d0f9ef99a9c75e11be04?rik=mSbyqjAlNrFe4w&riu=http%3a%2f%2f3.bp.blogspot.com%2f_vG0fWsry7w0%2fTQIK7sHG6hI%2fAAAAAAAAAGM%2fkFTq_yc-EqY%2fw1200-h630-p-k-no-nu%2f99870_D00680b_display.jpg&ehk=pVqB5XHSDjO0HeGI8PlMsZfujVuNjuIu7Vu089PN1eM%3d&risl=&pid=ImgRaw&r=0"
            alt="foto de perfil da pessoa"
          />
          <div className="publicacao-direita">
            <h2 className="saudacao">Boas vindas, Sara</h2>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handlerCreatePublic();
              }}
            >
              <input
                placeholder="Conte algo a seus amigos."
                id="create__publicacao"
                type="text"
                onChange={(event) => setnewPublic(event.target.value)}
              />
              <div>
                <i className="comp bi-image">Foto</i>
                <i className="comp bi-emoji-smile">Sentindo-se</i>
                <i className="comp bi-geo-alt">Localização</i>
                <button type="submit">Publicar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ListUsers className={"ListUsers"} updateList={() => setnewPublic()} />
      {publicacoes.map((publicacao, index) => (
        <Publicacoes key={`publicacao--${index}`} publicacao={publicacao} />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default Home;
