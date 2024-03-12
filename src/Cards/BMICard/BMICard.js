import React, { useEffect, useState } from 'react';
import './bmiCard.css';
import { useNavigate } from 'react-router-dom';

function BMICard(props) {
  const { userData, updateUserData } = props;
  const { heightFeet, heightInches, currentWeight } = userData;

  const [hasEffectRun, setHasEffectRun] = useState(false);

  const heightInMeters = (heightFeet * 12 + heightInches) * 0.0254;
  const bmi = (currentWeight / (heightInMeters * heightInMeters)).toFixed(1);
  
  let bmiStage = '';
  if (bmi < 18.5) bmiStage = 'Underweight';
  else if (bmi >= 18.5 && bmi <= 24.9) bmiStage = 'Normal';
  else if (bmi >= 25 && bmi <= 29.9) bmiStage = 'Pre-obesity';
  else if (bmi >= 30 && bmi <= 34.9) bmiStage = 'Obesity Class 1';
  else if (bmi >= 35 && bmi <= 39.9) bmiStage = 'Obesity Class 2';
  else bmiStage = 'Obesity Class 3';

  useEffect(() => {
    if (!hasEffectRun) {
      updateUserData({ currentBmi: bmi, currentBmiStage: bmiStage });
      setHasEffectRun(true);
    }
  }, [bmi, bmiStage, hasEffectRun, updateUserData]);

  const bmiBarStyle = { width: `${bmi}%` };
  const pointerLeftPosition = calculatePointerPosition(bmiStage);

  const navigate = useNavigate();

  const handleBmipageCardClick = () => {};

  function calculatePointerPosition(stage) {
    switch (stage) {
      case 'Underweight':
        return { pointerLeftPosition: '0%', zIndex: 2 };
      case 'Normal':
        return { pointerLeftPosition: '25%', zIndex: 2 };
      case 'Pre-obesity':
        return { pointerLeftPosition: '50%', zIndex: 2 };
      case 'Obesity Class 1':
        return { pointerLeftPosition: '75%', zIndex: 2 };
      case 'Obesity Class 2':
        return { pointerLeftPosition: '100%', zIndex: 2 };
      case 'Obesity Class 3':
        return { pointerLeftPosition: '100%', zIndex: 2 };
      default:
        return { pointerLeftPosition: '0%', zIndex: 2 };
    }
  }

  return (
    <div className='BMICard' onClick={handleBmipageCardClick}>
      <div className='BMICardTop'>
        <h2 className='BMICardTopH2'>
          <img className='BMICardTopLeftImg' alt='' />
          BMI
        </h2>
      </div>

      <div className='BMICardMiddle'>
        <div className='BMI-bar' style={bmiBarStyle}></div>
        <div className='BMI-pointer' style={pointerLeftPosition}></div>
      </div>

      <div className='BMICardLast'>
        <div className='BMICardLastCurrent'>
          <h3 className='BMICardLastH3CurrentText'>Current:</h3>
          <h4 className='BMICardLastH4Current'>{bmi} </h4>
        </div>
        <div className='BMICardLastGoal'>
          <h3 className='BMICardLastH3GoalText'>BMI Level:</h3>
          <h4 className='BMICardLastH4Goal'>{bmiStage} </h4>
        </div>
      </div>
    </div>
  );
}

export default BMICard;
