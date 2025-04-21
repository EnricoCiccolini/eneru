import NavBar from './component/NavBar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Games from './pages/games';
import LastCard from './pages/LastCard';
import About from './pages/About';
import BuriedCard from './pages/BuriedCard';

export default function App() {

  return (
    <>

      <BrowserRouter >
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about" element={<About />} />
            <Route path="/games/ultimo/:slug" element={<LastCard />} />
            <Route path="/games/sepolti/:slug" element={<BuriedCard />} />
          </Route>

        </Routes>


      </BrowserRouter>
    </>
  )
};




