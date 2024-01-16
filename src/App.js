import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React,{useState} from 'react';
import './App.css';
import Fitex from './Fitex';
import Dob from './components/DOB/Dob';
import Gender from './components/Gender/Gender';
import Height from './components/Height/Height';
import Weight from './components/Weight/Weight';
import InfoPage from './pages/InfoPage/InfoPage';
import Home from './pages/Home/Home';

function App() {

  const [userData, setUserData] = useState({
    dob: null,
    gender: '',
    height: '',
    weight: '',
  });

  const updateUserData = (data) => {
    setUserData({ ...userData, ...data });
  };



  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/Fitex' element={<Fitex/>}></Route>
          
          <Route path='/dob' element={<Dob updateUserData={updateUserData} />}></Route>
          <Route path='/gender' element={<Gender updateUserData={updateUserData} />}></Route>
          <Route path='/height' element={<Height updateUserData={updateUserData} />}></Route>
          <Route path='/weight' element={<Weight updateUserData={updateUserData} />}></Route>
          <Route path='/infopage' element={<InfoPage userData={userData} />}></Route>

          <Route path='/home' element={<Home/>}></Route>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
