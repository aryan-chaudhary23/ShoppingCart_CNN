// components/ImageUploader.jsx
import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function ImageUploader({ setPredictedItem }) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const openCamera = async () => {
    setIsCameraOpen(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  const captureImage = () => {
    console.log("Hello")
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
  const formData = new FormData();
  formData.append('image', blob, 'capture.png'); // ✅ Correct key

  try {
    const response = await axios.post('http://localhost:5000/predict', formData);
    console.log(response)
    setPredictedItem(response.data.predicted_item); // also update to predicted_item
  } catch (error) {
    console.error('Prediction error:', error);
  }
}, 'image/png');

  };

  return (
    <div className="mb-6 text-center">
      {!isCameraOpen ? (
        <button
          onClick={openCamera}
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          📷 Upload Item Photo
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <video ref={videoRef} width="300" height="200" className="mb-4 rounded-lg border border-gray-300" />
          <canvas ref={canvasRef} width="300" height="200" className="hidden" />
          <button
            onClick={captureImage}
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            📤 Submit
          </button>
        </div>
      )}
    </div>
  );
}
