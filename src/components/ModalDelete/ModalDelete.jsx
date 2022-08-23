import React from "react";
import "./ModalDelete.css";
import Modal from "../Modal/Modal.jsx";
import { UsersServices } from "../../services/UsersService";

function ModalDelete({ closeModal, publicacaoToDelete }) {
  
  const handleDeletePublicacao = async (publicacao) => {
    await UsersServices.deletePublicacaoById(publicacao);
    closeModal();
  };

  return (
    <Modal className="Modal" closeModal={closeModal}>
      <p className="text__p"> Tem certeza que deseja remover essa publicação?</p>
      <div className="choice">
        <button className="yes" onClick={() => handleDeletePublicacao(publicacaoToDelete)}>
          Sim
        </button>
        <button className="no" onClick={closeModal}>
          Não
        </button>
      </div>
      <p className="alert">
        {" "}
        <i className="bi bi-info-circle"></i> Em caso de remoção. Essa publicação não será recuperável!
      </p>
    </Modal>
  );
}

export default ModalDelete;
