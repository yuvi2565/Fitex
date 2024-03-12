import React, { useState, useRef, useEffect } from 'react';
import './snap.css';

const Snap = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  const stopVideoStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const handleCaptureImage = () => {
    if (videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageUrl = canvas.toDataURL('image/png');
      setImageSrc(imageUrl);
    }
  };

  const handleStartCapture = () => {
    setIsCapturing(true);
    startVideoStream();
  };

  const handleStopCapture = () => {
    setIsCapturing(false);
  };

  const handleSaveImage = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'snapshot.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!isCapturing) {
      stopVideoStream();
    }
    return () => stopVideoStream(); // Cleanup on component unmount
  }, [isCapturing]);

  return (
    <div className="snapPageContainer">
      <video ref={videoRef} className="snapPageVideo" style={{ display: isCapturing ? 'block' : 'none' }}></video>
      <canvas ref={canvasRef} className="snapPageCanvas" style={{ display: isCapturing ? 'none' : 'block' }}></canvas>
      <button onClick={isCapturing ? handleCaptureImage : handleStartCapture} className="snapPageButton">
        {isCapturing ? 'Take Snapshot' : 'Start Capture'}
      </button>
      {isCapturing && <button onClick={handleStopCapture} className="snapPageButton">Stop Capture</button>}
      {imageSrc && (
        <div className="snapPageImageContainer">
          <img src={imageSrc} alt="Captured Image" className="snapPageImage" />
          <button onClick={handleSaveImage} className="snapPageButton">Save</button>
        </div>
      )}
    </div>
  );
};

export default Snap;
