import React, { useState, useEffect } from 'react';
import './water.css';

const Water = (props) => {

  const currentWater = parseInt(props.userData.currentWater);
  const waterGoal = parseInt(props.userData.waterGoal);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [newWaterGoal, setNewWaterGoal] = useState('');

  useEffect(() => {
    if (currentWater >= waterGoal) {
      // alert('Congratulations! You have reached your daily water intake goal.');
    }
  }, [currentWater, waterGoal]);

  const handleInputChange = (amount) => {
    setSelectedAmount(amount);
  };

  const handleAddWater = () => {
    if (selectedAmount > 0) {
      const newWaterAmount = currentWater + selectedAmount;
      props.updateUserData({ currentWater: newWaterAmount });
      setSelectedAmount(0); // Reset selected amount after adding water
    }
  };

  const handleWaterGoalChange = (event) => {
    setNewWaterGoal(event.target.value);
  };

  const handleSetWaterGoal = () => {
    const parsedGoal = parseInt(newWaterGoal, 10);
    if (!isNaN(parsedGoal) && parsedGoal > 0) {
      props.updateUserData({ waterGoal: parsedGoal });
      setNewWaterGoal(''); // Reset input field
    }
  };

  return (
    <div className='waterTracker'>
      <h1 className='waterTitle'>Water Intake Tracker</h1>

      <section className='waterStatisticsSection'>

        <fieldset className='waterFieldset'>
          <div className='waterGoalSettingSection'>
            <p className='waterText'>Set your daily water goal:</p>
            <input
              type="number"
              value={newWaterGoal}
              onChange={handleWaterGoalChange}
              placeholder="Enter goal in ml"
              className='waterGoalInput'
            />
            <button className='waterSetGoalButton' onClick={handleSetWaterGoal}>Set Goal</button>
          </div>
          <p className='waterTotalConsumed'>Total consumed water: {currentWater} ml</p>
          <p className='waterRemaining'>Total remaining water: {waterGoal - currentWater} ml</p>
        </fieldset>
      </section>
      <section className='waterAmountSection'>
        <fieldset className='waterFieldset'>
          <div className='waterAmountDiv'>
            <input
              type="radio"
              id="200ml"
              name="waterAmount"
              value={200}
              onChange={() => handleInputChange(200)}
              checked={selectedAmount === 200}
              className='waterRadioInput'
            />
            <label htmlFor="200ml" className='waterLabel'>200ml</label>

            <input
              type="radio"
              id="500ml"
              name="waterAmount"
              value={500}
              onChange={() => handleInputChange(500)}
              checked={selectedAmount === 500}
              className='waterRadioInput'
            />
            <label htmlFor="500ml" className='waterLabel'>500ml</label>

            <input
              type="radio"
              id="1litre"
              name="waterAmount"
              value={1000}
              onChange={() => handleInputChange(1000)}
              checked={selectedAmount === 1000}
              className='waterRadioInput'
            />
            <label htmlFor="1litre" className='waterLabel'>1 Litre</label>
          </div>
        </fieldset>
        <button className='waterAddWaterButton' onClick={handleAddWater}>Add Water</button>
      </section>

    </div>
  );
};

export default Water;
