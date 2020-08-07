import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/37389658?s=460&u=ae4a86e8f5e9e7122df2e8f5c8bf2b1f2825ff80&v=4"
          alt="Gustavo Freitas"
        />
        <div>
          <strong>Gustavo Freitas</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vidas das
        pessoas atraves de experiencias. Mais de 200.000 ja passaram por umas
        das minhas explosoes.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
