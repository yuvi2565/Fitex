import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './weight.css';

const Weight = ({ updateUserData }) => {
  const [selectedWeight, setSelectedWeight] = useState('');
  const [weightText, setWeightText] = useState('Select Weight');
  const [textColor, setTextColor] = useState('var(--primary-color)');
  const navigate = useNavigate();

  const handleWeightChange = (event) => {
    setSelectedWeight(event.target.value);
    setWeightText(`Weight: ${event.target.value} kg`);
    setTextColor('var(--secondary-color)');
  };

  const handleWeightNextClick = () => {
    if (selectedWeight.trim() !== '') {
      updateUserData({ weight: selectedWeight });
      navigate('/infopage');
    } else {
      alert('Please enter a valid weight.');
    }
  };

  return (
    <div className='Weight'>
      <div className='Weight-icon'></div>
      <h1 style={{ color: textColor }}>{weightText}</h1>
      <div className='WeightInput'>
        <label>Weight: </label>
        <input
          type='text'
          id='weightInput'
          value={selectedWeight}
          onChange={handleWeightChange}
          required
        />
        <label> kg</label>
      </div>
      <div className='WeightNext'>
        <button onClick={handleWeightNextClick}><img/></button>
      </div>
    </div>
  );
};

export default Weight;
