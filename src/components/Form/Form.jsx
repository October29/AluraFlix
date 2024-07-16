import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header/Header';

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  padding: 4rem 6rem 0;
  fieldset {
    width: 45%;
    height: 8rem;
    border: none;
  }
  & label {
    display: block;
    font-weight: bolder;
    color: #FFFFFF;
  }
  .text-section {
    width: 100%;
  }
  .tittle {
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    color: #FFFFFF;
  }
  .description {
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
  }
  .tag {
    font-size: 32px;
    color: #FFFFFF;
    margin: 4rem 0 4rem 0;
    padding: 2rem 0;
    border: solid #ffffff36;
    border-width: 1px 0px 1px 0px;
  }
`;

const InputText = styled.input`
  width: 90%;
  height: 3rem;
  margin-top: 1rem;
  padding: 0 1rem;
  border: 1px solid #00000036;
  border-radius: 0.5rem;
  font-weight: 800;
  background-color: transparent;
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 6rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #00000036;
  border-radius: 0.5rem;
  font-weight: 800;
  background-color: transparent;
  resize: none;
`;

const Form = ({ onAddVideo, onEditVideo, currentVideo }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [photoVideo, setPhotoVideo] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentVideo) {
      setId(currentVideo.id);
      setTitle(currentVideo.titleVideo);
      setCategory(currentVideo.categoryVideo);
      setUrlVideo(currentVideo.urlVideo);
      setPhotoVideo(currentVideo.photoVideo);
      setDescription(currentVideo.description);
    } else {
      clearForm();
    }
  }, [currentVideo]);

  const clearForm = () => {
    setId(uuidv4());
    setTitle('');
    setCategory('');
    setUrlVideo('');
    setPhotoVideo('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentVideo) {
      onEditVideo(id, title, category, urlVideo, photoVideo, description);
    } else {
      onAddVideo(id, title, category, urlVideo, photoVideo, description);
    }
  };

  return (
    <>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <div className='text-section'>
          <h1 className='tittle'>NUEVO VIDEO</h1>
          <p className='description'>Complete el formulario para crear una nueva tarjeta de video</p>
          <p className='tag'>Crear Tarjeta</p>
        </div>
        
        <fieldset>
          <label htmlFor="titulo">Titulo</label>
          <InputText
            required
            id='titulo'
            name='titulo'
            type="text"
            placeholder="Ingrese titulo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="categoria">Categoria</label>
          <InputText
            required
            id='categoria'
            name='categoria'
            type="text"
            placeholder="Ingrese categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="video">Video</label>
          <InputText
            required
            id='video'
            name='video'
            type="text"
            placeholder="Ingrese la URL del video"
            value={urlVideo}
            onChange={(e) => setUrlVideo(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="imagen">Imagen</label>
          <InputText
            required
            id='imagen'
            name='imagen'
            type="text"
            placeholder="Ingrese URL de la imagen"
            value={photoVideo}
            onChange={(e) => setPhotoVideo(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="descripcion">Descripción</label>
          <TextArea
            id='descripcion'
            name='descripcion'
            placeholder="Ingrese la descripción del video"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </fieldset>
        <button type="submit">'Agregar Video'</button>
        <button type="button" onClick={clearForm}>Limpiar Campos</button>
      </StyledForm>
    </>
  );
};

export default Form;
