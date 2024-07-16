// api.jsx

const API_URL = 'http://localhost:5500';

export const listCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) {
    throw new Error('Error al listar categorías');
  }
  return response.json();
};

export const listVideos = async () => {
  const response = await fetch(`${API_URL}/videos`);
  if (!response.ok) {
    throw new Error('Error al listar videos');
  }
  return response.json();
};

export async function addVideo(id, titleVideo, categoryVideo, urlVideo, photoVideo) {
  const data = {
    id: id,
    titleVideo: titleVideo, // Corregido el nombre del campo
    categoryVideo: categoryVideo,
    urlVideo: urlVideo,
    photoVideo: photoVideo
  };

  try {
    const response = await fetch(`${API_URL}/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Video added successfully:', result);
    return result;
  } catch (error) {
    console.error('Error adding video:', error);
    throw error;
  }
}

export const deleteVideo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/videos/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Error al eliminar video');
    }

    return response.json();
  } catch (error) {
    console.error('Error deleting video:', error);
    throw error;
  }
};

export const updateVideo = async (id, title, category, urlVideo, photoVideo) => {
  const data = {
    id: id,
    titleVideo: title,
    categoryVideo: category,
    urlVideo: urlVideo,
    photoVideo: photoVideo
  };

  try {
    const response = await fetch(`${API_URL}/videos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Video updated successfully:', result);
    return result;
  } catch (error) {
    console.error('Error updating video:', error);
    throw error;
  }
};

