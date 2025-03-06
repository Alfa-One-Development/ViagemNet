import React from 'react';
import ImgIndy from '../assets/Indianapolis.jpeg'
import '../styles/indianapolis.css'


function IndianapolisTripPage() {
    return (
        <div>
            <h1>Indianápolis</h1>
            <p>Descubra os melhores lugares pra ficar, passear e dormir em Indianápolis.</p>
            <article className='art1'>
            <section className='s1'>
              <img src={ImgIndy} alt="" />    
            </section>
            <section className='s2'>
              <h2>Sobre</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit. Aliquid molestiae corrupti quas illo laborum incidunt nisi velit! Doloremque tempora laboriosam autem ipsa sed. Quibusdam voluptates corrupti eos saepe?</p>
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
                
            </section>
            </article>
        </div>
    );
};

export default IndianapolisTripPage;