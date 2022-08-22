import "./User.css";

function User({ user }) {
  return (
    <div className="usuario" key={`"user"--${"index"}`}>
        <div className="img__nickname">
        <img className="mini_perfil" src={user.link_img} alt="foto do usuario"/>
        <div className="nomes">
            <p className="nickname">{user.nickname}</p>
            <p className="name">{user.nome}</p>
        </div>      
        </div>          
      <p className="descricao">{user.descricao}</p>
    </div>
  );
}

export default User;
