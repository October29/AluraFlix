import React from "react";
import styled from "styled-components";
import ButtonIcon from "../Button/ButtonIcon";
import { RiDeleteBin2Fill } from "react-icons/ri";

const StyledCardContainer = styled.div`
  border: 3px solid ${(props) => props.bordercolor || "red"};
  border-radius: 0.5rem;
  box-shadow: inset 0 0 18px ${(props) => props.bordercolor || "red"};
  overflow: hidden;

  .controller-card {
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    box-shadow: inset 0 0 8px -18px ${(props) => props.bordercolor || "red"};
  }

  img {
    width: 100%; /* Ajustado para ocupar el ancho completo del contenedor */
    height: auto; /* Ajusta la altura proporcionalmente */
    max-height: 260px; /* Limita la altura máxima para evitar distorsiones */
    object-fit: cover; /* Asegura que la imagen cubra el área asignada */
  }

  h5 {
    padding: 10px; /* Añade espaciado alrededor del título */
    text-align: center; /* Centra el texto */
    color: #ffffff; /* Color de texto blanco */
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
    margin: 0; /* Elimina márgenes predeterminados */
  }
`;

const CardContainer = ({ videos, borderColor, removeVideo, category }) => {
  if (!videos || videos.length === 0) return <div>No videos found</div>;

  const handleDelete = (id) => {
    removeVideo(id);
  };

  return (
    <StyledCardContainer bordercolor={borderColor}>
      {videos.map((video) => {
        if (video.categoryVideo === category.tittle) {
          return (
            <div className="card-video" key={video.id}>
              <img src={video.photoVideo} alt={video.tittleVideo} />
              <h5>{video.tittleVideo}</h5>
              <div className="controller-card">
                <ButtonIcon
                  onClick={() => handleDelete(video.id)}
                  text={<p>Eliminar</p>}
                  icon={<RiDeleteBin2Fill className="class-button" />}
                />
              </div>
            </div>
          );
        }
        return null; // Añadir esta línea para evitar errores de "expected to return a value"
      })}
    </StyledCardContainer>
  );
};

export default CardContainer;
