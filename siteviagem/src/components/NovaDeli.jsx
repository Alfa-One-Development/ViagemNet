import "../styles/NovaDeli.css";
function MeioDp(props) {
    return (
      <article>
        <h1>{props.nome}</h1>
        <img src={props.imagem} alt="Foto" />
        <p>{props.preco}</p>
        <p>{props.avaliacao}</p>
      </article>  
    );
}

export default MeioDp;