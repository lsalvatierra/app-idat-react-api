import React from "react";
import styled from "styled-components";

const HistoryContent = styled.div`
  display: flex;
  margin-top: 68px;
  margin-bottom: 300px;
`;

const HistoryInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 80px;
`;

const HistoryTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #283342;
  margin-bottom: 20px;
`;

const HistoryDescription = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #283342;
`;

const HistoryImage = styled.div`
  border-radius: 32px;
  width: 640px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 32px;
  }
`;

const History = () => (
  <HistoryContent>
    <HistoryInfo>
      <HistoryTitle>Nuestra Historia</HistoryTitle>
      <HistoryDescription>
        Fundada por una familia de origen Hongkonés que en el 2008 deciden crear
        Sr Ming, un restaurante y salón de té especializado en comida oriental
        más conocido como “chifa” en Perú.
        <br />
        <br />
        Está ubicado en San Miguel y lleva 12 años en el mercado ofreciendo los
        productos más frescos con la rapidez que los caracteriza, brindado un
        ambiente hogareño a cada cliente que confía en nosotros.
        <br />
        <br />
        Nuestro compromiso es siempre ofrecerles la mejor experiencia, es por
        ello que innovamos constantemente nuestros platillos y bebidas. Sr Ming
        los invita a disfrutar del verdadero sabor oriental.
      </HistoryDescription>
    </HistoryInfo>
    <HistoryImage>
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg"
        alt="Nuestra Historia"
        loading="lazy"
      />
    </HistoryImage>
  </HistoryContent>
);

export { History };