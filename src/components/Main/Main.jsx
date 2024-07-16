import React from 'react';
import styled from 'styled-components';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';

const StyledMain = styled.main`
  padding: 0 3rem;
`;

const StyledSectionCategorie = styled.div`
  h2 {
    width: 30rem;
    padding: 1.5rem 0;
    margin: 0 0 2rem 0;
    font-size: 32px;
    color: #ffffff;
    border-radius: 0.5rem;
    text-align: center;
    background-color: ${(props) => props.backgroundcolor || 'transparent'};
  }
`;

const CardVideoContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CardVideo = styled.div`
  width: 430px;
  border: 3px solid ${(props) => props.bordercolor || 'red'};
  border-radius: 0.5rem;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${(props) => props.bordercolor || 'red'};
  & img {
    width: 430px;
    height: 290px;
  }
  li {
    list-style: none;
  }
`;

const ControllerCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  background-color: ${(props) => props.bordercolor};
`;

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
  border: none;
  background-color: transparent;
  cursor: pointer;
  .class-button {
    width: 35px;
    height: 35px;
  }
  p {
    font-size: 18px;
    font-weight: 900;
    margin: 0;
  }
`;

const Main = ({ categories, videos, removeVideo, onEditVideo }) => {
  const [currentVideo, setCurrentVideo] = React.useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  const handleEditModalOpen = (video) => {
    setCurrentVideo(video);
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setCurrentVideo(null);
    setIsEditModalOpen(false);
  };

  const handleEditVideo = async (id, title, category, urlVideo, photoVideo) => {
    await onEditVideo(id, title, category, urlVideo, photoVideo);
    handleEditModalClose(); // Cerrar el modal después de la edición
  };

  if (!videos || videos.length === 0) return <div>No videos found</div>;

  const handleDelete = (id) => {
    removeVideo(id);
  };

  return (
    <StyledMain>
      {categories.map((category) => (
        <StyledSectionCategorie key={category.id} backgroundcolor={category.color}>
          <h2>{category.tittle}</h2>
          <CardVideoContainer>
            {videos.map((video) => {
              if (category.tittle === video.categoryVideo) {
                return (
                  <CardVideo className="card-video" key={video.id} bordercolor={category.color}>
                    <li>
                      <img src={video.photoVideo} alt={video.tittleVideo} />
                      <ControllerCard className="controller-card" bordercolor={category.color}>
                        <ButtonIcon onClick={() => handleDelete(video.id)}>
                          <RiDeleteBin2Fill className="class-button" />
                          <p>Eliminar</p>
                        </ButtonIcon>
                        <ButtonIcon onClick={() => handleEditModalOpen(video)}>
                          <AiFillEdit className="class-button" />
                          <p>Editar</p>
                        </ButtonIcon>
                      </ControllerCard>
                    </li>
                  </CardVideo>
                );
              }
              return null;
            })}
          </CardVideoContainer>
        </StyledSectionCategorie>
      ))}

      {/* Modal para editar */}
      <Modal isOpen={isEditModalOpen} onClose={handleEditModalClose}>
        {currentVideo && (
          <EditForm currentVideo={currentVideo} onEditVideo={handleEditVideo} />
        )}
      </Modal>
    </StyledMain>
  );
};

export default Main;
