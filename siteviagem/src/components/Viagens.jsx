import Lisboa from "../assets/Viagem1.webp"
import Balneario from "../assets/Viagem2.jpg"
import Indianapolis from "../assets/Viagem3.jpg"
import Novadeli from "../assets/Viagem4.jpg"
import Luanda from "../assets/Viagem5.jpg"
import Card from "../components/Cards"
import "../styles/Viagens.css"

function Viagens() {
    const cidades = {
        lisboa: {
            location: "/lisboa",
            nome: "Lisboa",
            img: Lisboa,
            avaliation: "⭐⭐⭐",
            description: "Capital de Portugal, com uma rica herança cultural, encantadoras ruas de paralelepípedos e pontos turísticos como a Torre de Belém e o Mosteiro dos Jerónimos"
        },

        novadeli: {
            location: "/novadeli",
            nome: "Nova Deli",
            img: Novadeli,
            avaliation: "⭐★★",
            description: "Capital da Índia, conhecida pela mistura vibrante de história, cultura e modernidade, com monumentos como o Taj Mahal e uma vida urbana intensa"
        },

        indianapolis: {
            location: "/indianapolis",
            nome: "Indianápolis",
            img: Indianapolis,
            avaliation: "⭐⭐⭐",
            description: "Capital do estado de Indiana, nos EUA, conhecida pelo circuito de corridas Indianapolis 500, com uma forte cena esportiva e uma cidade vibrante e em crescimento"
        },

        luanda: {
            location: "/luanda",
            nome: "Luanda",
            img: Luanda,
            avaliation: "⭐⭐★",
            description: "Luanda é a capital de Angola, localizada na costa atlântica. É o principal centro econômico e cultural do país, com uma mistura de arquitetura moderna e colonial."
        },

        balneario: {
            location: "/balneario",
            nome: "Balneário Camburiú",
            img: Balneario,
            avaliation: "⭐⭐★",
            description: "Cidade litorânea no sul do Brasil, famosa pelas suas praias, arranha-céus à beira-mar e vida noturna agitada"
        }
    };

    return (
        <>
            <h2 className="Passagens">Passagens Aéreas</h2>

            <article className="Cards">

            <Card props = {cidades.balneario}/>
            <Card props = {cidades.lisboa}/>
            <Card props = {cidades.novadeli}/>
            <Card props = {cidades.indianapolis}/>
            <Card props = {cidades.luanda}/>

            </article>

          </>
    )
}

export default Viagens;