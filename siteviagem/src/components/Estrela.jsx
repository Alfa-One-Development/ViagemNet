import  { useState } from 'react';

function Estrela() {
  const [avaliacao, setAvaliacao] = useState(0);

  const handleClick = (estrela) => {
    setAvaliacao(estrela);
  };
 
  const renderEstrelas = () => {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          style={{ cursor: 'pointer', color: i <= avaliacao ? 'yellow' : 'black', fontSize: '2vw' }}
        >
        𓇼
        </span>
      );
    }
    return estrelas;
  };

  return (


    <div style={{
        border: "2px solid gray",
        padding: "10px",
        width: "300px",
        textAlign: "center",
      }}>
        <h1>Faça sua avaliação</h1>
      {renderEstrelas()}
      <p>Você deu {avaliacao} estrelas.</p>
    </div>
  );
}

export default Estrela