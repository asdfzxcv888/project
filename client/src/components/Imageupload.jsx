import React, { useState } from 'react';
import axios from 'axios';
import { useglobalcontext } from '../context/Globalcontext';
import { useNavigate } from 'react-router-dom';
const Imageupload = () => {
    const [image, setImage] = useState(null);
    const{editproduct,getallproducts,getmyproducts}=useglobalcontext()
    const navigate=useNavigate()

    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('image', image);
  
        await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'name':editproduct._id
          },
        });
  
        console.log('Image uploaded successfully');
        navigate('/products')
        getmyproducts()

        getallproducts()

      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  
    return (
      <div>
        <h2>Image Upload</h2>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
}

export default Imageupload