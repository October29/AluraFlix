import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { deleteVideo, listCategories, listVideos, addVideo, updateVideo } from "./ApiComponent/API";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal"; 
import EditForm from "./components/EditForm/EditForm"; 

const AppContainer = styled.main`
  background-color: #262626;
  height: 100%;
`;

function App() {
  console.log("control01: App() activa");

  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await listCategories();
        setCategories(categories);
      } catch (error) {
        setError(error.message);
      }
    };

    const loadVideos = async () => {
      try {
        const videos = await listVideos();
        setVideos(videos);
      } catch (error) {
        setError(error.message);
      }
    };

    loadCategories();
    loadVideos();
  }, []);

  const handleAddVideo = async (id, title, category, urlVideo, photoVideo) => {
    try {
      const newVideo = await addVideo(id, title, category, urlVideo, photoVideo);
      setVideos((prevVideos) => [...prevVideos, newVideo]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditVideo = async (id, title, category, urlVideo, photoVideo) => {
    try {
      const updatedVideo = await updateVideo(id, title, category, urlVideo, photoVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) => (video.id === id ? updatedVideo : video))
      );
    } catch (error) {
      console.error('Error editing video:', error);
    }
  };

  const removeVideo = async (id) => {
    try {
      await deleteVideo(id);
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
      console.error('Error removing video:', error);
    }
  };

  const handleModalOpen = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setCurrentVideo(null);
    setIsModalOpen(false);
  };

  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Main 
                categories={categories}
                videos={videos}
                removeVideo={removeVideo}
                onEditVideo={handleEditVideo} 
              />
            </>
          } />
          <Route path="/crear-video" element={
            <Form 
              onAddVideo={handleAddVideo} 
            />
          } />
        </Routes>
      </AppContainer>
      {/* Modal para editar */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {currentVideo && (
          <EditForm 
            currentVideo={currentVideo} 
            onEditVideo={handleEditVideo} 
          />
        )}
      </Modal>
    </Router>
  );
}

export default App;
