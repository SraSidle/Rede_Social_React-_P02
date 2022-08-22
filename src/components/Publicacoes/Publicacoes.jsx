import "./Publicacoes.css";

function Publicacoes({publicacao}){
    return(
        <div className="publicacoes" key={`"publicacao"--${"index"}`}>
            <div className="img__name">
             <img className="mini_perfil" src="https://th.bing.com/th/id/R.136f218ca666d0f9ef99a9c75e11be04?rik=mSbyqjAlNrFe4w&riu=http%3a%2f%2f3.bp.blogspot.com%2f_vG0fWsry7w0%2fTQIK7sHG6hI%2fAAAAAAAAAGM%2fkFTq_yc-EqY%2fw1200-h630-p-k-no-nu%2f99870_D00680b_display.jpg&ehk=pVqB5XHSDjO0HeGI8PlMsZfujVuNjuIu7Vu089PN1eM%3d&risl=&pid=ImgRaw&r=0" alt="foto de perfil da pessoa"/>
            <p>Nome do Usuário</p>
            </div>          
           <p>{publicacao.texto}</p> 
        </div>
    )
}

export default Publicacoes;