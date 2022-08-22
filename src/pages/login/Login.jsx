import "./Login.css";

function Login() {
  return (
    <div className="page__login">
      <div className="logo">
        <img className="nome-aplicacao" src="https://th.bing.com/th/id/R.fbfa91a682683bcdf85a09069002749e?rik=PwzFvQwdMzthNw&pid=ImgRaw&r=0" />
      </div>

      <div className="container">
        <div className="fields">
          <div className="fields__title">
            <p id="field__title">
              Acesse o <span className="pink__font">Orkut</span> com a sua conta{" "}
            </p>
            {/* <span style="color: #4285F4">G</span><span style="color: #DB4437">o</span><span style="color: #F4B400">o</span><span style="color: #4285F4">g</span><span style="color: #0F9D58">l</span><span style="color: #DB4437">e</span>!</p> */}
          </div>

          <div className="fields__textboxs">
            <input
              type="email"
              name=""
              placeholder="Nome de Usuario"
              id="field__email"
            />
            <input
              type="password"
              name=""
              placeholder="Digite sua senha"
              id="field__pass"
            />
          </div>

          <div className="fields__remember">
            <input type="checkbox" name="" id="field__remember" />
            <label for="field__remember">Lembrar sempre do meu acesso.</label>
          </div>

          <div className="fields__buttons">
            <button id="btn__login">ENTRAR</button>
          </div>

          <div className="fields__recovery">
            <a href="#">Esqueci senha ou E-mail</a>
          </div>

          <div className="create">
            Não tem conta?<span className="pink__font"> Criar agora</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
