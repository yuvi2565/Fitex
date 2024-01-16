import React from 'react';

function InfoPage({ userData }) {
    console.log('userData in InfoPage:', userData);
  return (
    <div className='InfoPage'>
      <h1>InfoPage</h1>
      <p>Date of Birth: {userData && userData.dob ? userData.dob.toLocaleDateString() : 'N/A'}</p>
      <p>Gender: {userData && userData.gender}</p>
      <p>Height: {userData && userData.height}</p>
      <p>Weight: {userData && userData.weight}</p>
    </div>
  );
}

export default InfoPage;
