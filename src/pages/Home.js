import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (image) {
      navigate('/result', { state: { imageName: image.name } });
    }
  };

  return (
    <div>
      <h1>Welcome to GemID</h1>
      <p>Upload a gemstone image to analyze it.</p>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br />
      <button onClick={handleSubmit}>Analyze</button>
    </div>
  );
}

export default Home;
