import React from 'react';
import ImgIndy from '../assets/Indianapolis.jpeg'
import '../styles/indianapolis.css'
import Estrela from '../components/estrelaa';


function IndianapolisTripPage() {
    return (
        <div className='indy'>
            <h1>Indianápolis</h1>
            <p>Descubra os melhores lugares pra ficar, passear e dormir em Indianápolis.</p>
            <article className='art1'>
            <section className='s1'>
              <img src={ImgIndy} alt="" />    
            </section>
            <section className='s2'>
              <h2>Sobre</h2>
              <p>Indianápolis é a capital e a maior cidade do estado de Indiana, nos Estados Unidos. Localizada na região Centro-Oeste do país, a cidade é conhecida por ser um importante centro financeiro, cultural e esportivo. Fundada em 1821, Indianápolis foi planejada para ser a capital do estado, e seu layout foi desenhado com ruas que convergem para o Monument Circle, um marco central que abriga o Soldiers and Sailors Monument, um memorial dedicado aos veteranos de guerra.</p>
            </section>
            </article>
            <article className='art2'>
            <section className='s3'> 
                <h2>Valores</h2>
                <h3>3,000</h3>
                <p>hbajbsd</p>
            </section>
            <section className='4'>
                <h2>Como esse local é avaliado?</h2>
                <p>Veja a avaliação de outros visitantes e compartilhe a sua experiência.</p>
                <Estrela />
                
            </section>
            </article>
        </div>
    );
};

export default IndianapolisTripPage;