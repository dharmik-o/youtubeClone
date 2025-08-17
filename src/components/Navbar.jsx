import { NavLink ,useNavigate} from 'react-router-dom'
import pfp from "../assests/default_pfp.png"
import "../styles/Navbar.css"
import { useState } from 'react'
export default function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"))
  const [query,setQuery]  = useState("");
  
  // Handles the search form submission
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/home/search?query=${encodeURIComponent(query)}`)
  }
  return (
    <nav className={`main-navbar ${theme}`}>
      <NavLink to={"/home"}>Video Streamer</NavLink>
      <form className='search-form ' 
      onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" 
        value = {query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder='Search across our plateform'/>
        <button type='submit'>🔎</button>
      </form>
      <button onClick={toggleTheme}
      style={{
        color : 'white',
        backgroundColor: "green",
        padding : "4px 10px",
        borderRadius : "100px"
      }}>
        Change Theme
      </button>
      <NavLink to={'/user-profile'}
      style={{
       display:"flex",
       flexDirection : "row",
       alignContent:"center",
       justifyContent:"center",
       gap : "5px",
      }}>
      <img src={pfp} alt="profile picture" />
      <span>{user.username}</span>
      </NavLink>
    </nav>
  )
}
