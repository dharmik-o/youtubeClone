import { Route, Routes, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./components/HomePage"
import HomePageSuggestion from "./components/HomePageSuggestion"
import VideoPlayerPage from "./components/VideoPlayerPage"
import Login from "./components/Login"
import FormProvider from "./context/FormProvider"
import UserProfile from "./components/UserProfile"
import LikedVideos from "./components/LikedVideos"
import DislikedVideos from "./components/DislikedVideo"
import WatchList from "./components/WatchList"
import Navbar from "./components/Navbar"
import SearchedData from "./components/SearchedData"
function App() {
  const location = useLocation() 
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
    {location.pathname !== "/" && <Navbar theme={theme} toggleTheme={toggleTheme} />}
    <FormProvider>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path ="/home" element={<HomePage/>}>
          <Route index  element={<HomePageSuggestion/>}/>
          <Route path="search" element={<SearchedData/>}/>
       </Route>
       
       <Route path="/user-profile" element={<UserProfile />}>
        <Route index element={<LikedVideos />} />
        <Route path="liked-videos" element={<LikedVideos />} />
        <Route path="disliked-videos" element={<DislikedVideos />} />
        <Route path="watchlist" element={<WatchList />} />
        </Route>
       <Route path="/results/:videoId" element={<VideoPlayerPage/>}/>
     </Routes>
    </FormProvider>
    </>
  )
}

export default App
