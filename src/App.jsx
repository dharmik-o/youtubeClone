import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import HomePageSuggestion from "./components/HomePageSuggestion"
import VideoPlayerPage from "./components/VideoPlayerPage"

function App() {

  return (
     <Routes>
       <Route path ="/" element={<HomePage/>}>
          <Route index  element={<HomePageSuggestion/>}/>
       </Route>
       <Route path="/results/:videoId" element={<VideoPlayerPage/>}/>
     </Routes>
  )
}

export default App
