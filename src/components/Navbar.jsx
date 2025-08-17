import { NavLink } from 'react-router-dom'
import pfp from "../assests/default_pfp.png"
import "../styles/Navbar.css"
export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("userData"))
  return (
    <nav className='main-navbar'>
      <NavLink>Video Streamer</NavLink>
      <form className='search-form '>
        <input type="text" />
        <button>🔎</button>
      </form>
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
