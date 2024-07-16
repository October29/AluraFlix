import React from "react";
import Form from "./Form/Form";
import styled from "styled-components";
import Header from "./Header/Header";

const PageContainer = styled.div`
  height: 100vh;
  padding: 3rem 8rem;
  .crear-tarjeta {
    font-size: 32px;
    color: #ffffff;
    margin: 4rem 0 4rem 0;
    padding: 2rem 0;
    border: solid #ffffff36;
    border-width: 1px 0px 1px 0px;
  }
`;

const TitleSection = styled.div`
  h1 {
    font-size: 48px;
    text-align: center;
    color: #ffffff;
  }
  p {
    font-size: 24px;
    text-align: center;
    color: #ffffff;
  }
`;

const AddVideoPage = ({ onAddVideo, onEditVideo, currentVideo }) => {
  return (
    <>
      <PageContainer>
        <TitleSection>
          <h1>Nuevo video</h1>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </TitleSection>
        <p className="crear-tarjeta">Crear Tarjeta</p>

        <Form
          onAddVideo={onAddVideo}
          onEditVideo={onEditVideo}
          currentVideo={currentVideo}
        />
      </PageContainer>
    </>
  );
};

export default AddVideoPage;
