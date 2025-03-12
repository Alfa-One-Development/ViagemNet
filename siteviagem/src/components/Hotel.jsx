function Hotel(props) {
  return (
    <article className="Hotel">
      <h4>{props.nome}</h4>
      <img src={props.image} alt="Foto" />
      <p>A partir de: {props.hobby} por Noite!</p>
      <p>{props.avaliacao}</p>
    </article>
  );
}

export default Hotel;