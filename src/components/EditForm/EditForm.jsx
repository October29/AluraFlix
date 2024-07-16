import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledEditForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #2d2d2d;
  border-radius: 2rem;
  h2 {
    font-size: 48px;
    font-weight: 900;
    color: #FFFFFF;
  }
  .campo {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2.5rem 0;
  }
  input {
    width: 70%;
    height: 3rem;
    padding: 0 1rem;
    margin: auto;
    color: #FFFFFF;
    border-radius: 0.5rem;
    background-color: transparent;
    border: 1px solid #6BD1FF;
  }
  label {
    font-size: 20px;
    text-align: center;
    font-weight: 800;
    color: #6BD1FF;
  }
  button {
    margin-bottom: 2em;
    font-size: 32px;
    font-weight: 900;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    color: #FFFFFF;
    background-color: #6BD1FF;
  }
`;

function EditForm({ currentVideo, onEditVideo }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [photoVideo, setPhotoVideo] = useState('');

  useEffect(() => {
    if (currentVideo) {
      setTitle(currentVideo.titleVideo);
      setCategory(currentVideo.categoryVideo.toLowerCase());
      setUrlVideo(currentVideo.urlVideo);
      setPhotoVideo(currentVideo.photoVideo);
    }
  }, [currentVideo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditVideo(currentVideo.id, title, category, urlVideo, photoVideo);
  };

  return (
    <StyledEditForm onSubmit={handleSubmit}>
      <h2>EDITAR CARD</h2>
      <div className="campo">
        <label>
          Titulo:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingrese nombre"
        />
      </div>
      <div className="campo">
        <label>
          Categoria:
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value.toLowerCase())}
          placeholder="Ingrese categoria"
        />
      </div>
      <div className="campo">
        <label>
          URL Video:
        </label>
        <input
          type="text"
          value={urlVideo}
          onChange={(e) => setUrlVideo(e.target.value)}
          placeholder="Ingrese URL del video"
        />
      </div>
      <div className="campo">
        <label>
          Imagen Video:
        </label>
        <input
          type="text"
          value={photoVideo}
          onChange={(e) => setPhotoVideo(e.target.value)}
          placeholder="Ingrese URL de la imagen del video"
        />
      </div>
      <button type="submit">Editar video</button>
    </StyledEditForm>
  );
}

export default EditForm;
