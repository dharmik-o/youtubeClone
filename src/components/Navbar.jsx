import { NavLink } from 'react-router-dom'
import pfp from "../assests/default_pfp.png"
import "../styles/Navbar.css"
export default function Navbar() {
  return (
    <nav className='main-navbar'>
      <NavLink>Video Streamer</NavLink>
      <form className='search-form '>
        <input type="text" />
        <button>🔎</button>
      </form>
      <NavLink to={'/user-profile'}>
      <img src={pfp} alt="profile picture" />
      </NavLink>
    </nav>
  )
}
