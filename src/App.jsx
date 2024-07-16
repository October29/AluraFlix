import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { deleteVideo, listCategories, listVideos, addVideo, updateVideo } from "./ApiComponent/API";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import AddVideoPage from "./components/AddVideoPage";
import Modal from "./components/Modal/Modal"; 
import Form from "./components/Form/Form"; 
import EditForm from "./components/EditForm/EditForm"; 
import { v4 as uuidv4 } from 'uuid';

const AppContainer = styled.main`
  background-color: #262626;
`;

function App() {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await listCategories();
        setCategories(categoriesData);
        
        const videosData = await listVideos();
        setVideos(videosData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddVideo = async (id, title, category, urlVideo, photoVideo) => {
    try {
      const newVideo = await addVideo(id, title, category, urlVideo, photoVideo);
      setVideos(prevVideos => [...prevVideos, newVideo]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditVideo = async (id, title, category, urlVideo, photoVideo) => {
    try {
      console.log('Editing Video:', { id, title, category, urlVideo, photoVideo }); // Verifica los datos antes de enviar
      await updateVideo(id, title, category, urlVideo, photoVideo);
      const updatedVideos = videos.map(video =>
        video.id === id ? { ...video, titleVideo: title, categoryVideo: category, urlVideo: urlVideo, photoVideo: photoVideo } : video
      );
      setVideos(updatedVideos);
      setCurrentVideo(null);
      closeModal(); // Asegura que se cierre el modal después de la edición
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  const removeVideo = async (id) => {
    try {
      await deleteVideo(id);
      const updatedVideos = videos.filter(video => video.id !== id);
      setVideos(updatedVideos);
    } catch (error) {
      setError(error.message);
    }
  };

  const openDialog = (video = null) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setIsModalOpen(false);
  };

  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Banner />
              <Main categories={categories} videos={videos} removeVideo={removeVideo} onEditVideo={openDialog} />
            </>
          } />
          <Route path="/crear-video" element={
            <Form onAddVideo={handleAddVideo} />
          } />
        </Routes>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {currentVideo ? (
            <EditForm currentVideo={currentVideo} onEditVideo={handleEditVideo} />
          ) : (
            <Form onAddVideo={handleAddVideo} />
          )}
        </Modal>
      </AppContainer>
    </Router>
  );
}

export default App;
