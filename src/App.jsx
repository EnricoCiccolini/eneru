import NavBar from './component/NavBar'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Games from './pages/games'
import LastCard from './pages/LastCard'


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/ultimo/:slug" element={<LastCard />} />
          </Route>

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App



{/* <Route path='/post-list' element={<PostList />} /> */ }

{/* <Route path="*" element={<Page404 />} /> */ }

