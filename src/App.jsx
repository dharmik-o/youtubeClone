import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import HomePageSuggestion from "./components/HomePageSuggestion"
import VideoPlayerPage from "./components/VideoPlayerPage"
import Login from "./components/Login"
import FormProvider from "./context/FormProvider"
function App() {
  return (
    <FormProvider>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path ="/home" element={<HomePage/>}>
          <Route index  element={<HomePageSuggestion/>}/>
       </Route>
       <Route path="/results/:videoId" element={<VideoPlayerPage/>}/>
     </Routes>
    </FormProvider>
  )
}

export default App
