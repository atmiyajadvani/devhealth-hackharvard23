import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import PhysicalHealthPage from './pages/PhysicalHealthPage';
import GoalsPage from './pages/GoalsPage';
import MentalHealthPage from './pages/MentalHealthPage';
import WellBeingPage from './pages/WellBeingPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignInPage/>} />
        <Route path='/physicalhealth' element={<PhysicalHealthPage/>}/>
        <Route path='/mentalhealth' element={<MentalHealthPage/>}/>
        <Route path='/wellbeing' element={<WellBeingPage/>}/>
        <Route path='/goals' element={<GoalsPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
