import "./ModalEdit.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { UsersServices } from "../../services/UsersService";

function ModalEdit({ closeModal, publicacaoTexto, publicacaoId }) {
  const [publiToUpdate, setPubliToUpdate] = useState({
    texto: publicacaoTexto,
    id: publicacaoId,
  });

  const editPubli = async (publicacao, publicacaoUpdate) => {
    delete publicacaoUpdate.id;
    await UsersServices.updatePubliById(publicacao, publicacaoUpdate);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="modal__edit">
        <p>Editar publicação</p>
        <form
          className="form__edit"
          onSubmit={(event) => {
            console.log(publicacaoId);
            event.preventDefault(); // senão vai tentar mandar os dados via navegador, muda a url e coloca as informaçoes, não manda pra API
            editPubli(publiToUpdate.id, publiToUpdate);
          }}
        >
          <input
            className="input-edit"
            type="text"
            placeholder={publicacaoTexto}
            value={publiToUpdate.texto} //
            name="title" //add name e value, essenciais para o input controlado
            onChange={(event) =>
              setPubliToUpdate({ ...publiToUpdate, texto: event.target.value })
            }
          />
          <button type="submit" className="button-edit">
            Atualizar
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default ModalEdit;
