import "./Publicacoes.css";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";
import { useState } from "react";

function Publicacoes({ publicacao, publicacaoToDelete}) {
  const [editPubliModal, setEditPubliModal] = useState(false);

  const [delPubliModal, setDelPubliModal] = useState(false);

  return (
    <div className="publicacoes" key={`"publicacao"--${"index"}`}>
      {delPubliModal && (
        <ModalDelete
          publicacaoToDelete={publicacao.id}
          closeModal={() => setDelPubliModal(false)}
          onDeletePublicacao={publicacaoToDelete}
        />
      )}
      {editPubliModal && (
        <ModalEdit
          publicacaoTexto={publicacao.texto}
          publicacaoId={publicacao.id}
          closeModal={() => setEditPubliModal(false)}
        />
      )}
      <div className="img__name">
        <img
          className="mini_perfil"
          src="https://th.bing.com/th/id/R.136f218ca666d0f9ef99a9c75e11be04?rik=mSbyqjAlNrFe4w&riu=http%3a%2f%2f3.bp.blogspot.com%2f_vG0fWsry7w0%2fTQIK7sHG6hI%2fAAAAAAAAAGM%2fkFTq_yc-EqY%2fw1200-h630-p-k-no-nu%2f99870_D00680b_display.jpg&ehk=pVqB5XHSDjO0HeGI8PlMsZfujVuNjuIu7Vu089PN1eM%3d&risl=&pid=ImgRaw&r=0"
          alt="foto de perfil da pessoa"
        />
        <p>Nome do Usuário</p>
      </div>
      <p>{publicacao.texto}</p>
      <div className="icons-edit-delete">
        <button
          type="button"
          className="icon-edit"
          onClick={() => setEditPubliModal(true)}
        >
          <i className="icon bi-pencil-square"></i>
        </button>
        <button
          type="button"
          className="icon-delete"
          onClick={() => setDelPubliModal(true)}
        >
          <i className="icon bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Publicacoes;
