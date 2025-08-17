import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/UserProfile.css";
import pfp from "../assests/default_pfp.png"
const UserProfile = ({ theme }) => {
    const user = JSON.parse(localStorage.getItem("userData"))
    return (
        <div className={`profile-container ${theme}`}>
            <header className="profile-header">
                <img 
                    src={pfp}
                    alt="User Profile" 
                    className="profile-picture" 
                />
                <div className="profile-info">
                    <h1>{user.username}</h1>
                    <p>{user.email} • 1.2K Subscribers • 150 Videos</p>
                </div>
            </header>

            <nav className="profile-tabs">
                <NavLink 
                    to="/user-profile/liked-videos" 
                    className={({ isActive }) => `tab-button ${isActive ? 'active' : ''}`}
                >
                    Liked Videos
                </NavLink>
                <NavLink 
                    to="/user-profile/disliked-videos" 
                    className={({ isActive }) => `tab-button ${isActive ? 'active' : ''}`}
                >
                    Disliked Videos
                </NavLink>
                <NavLink 
                    to="/user-profile/watchlist" 
                    className={({ isActive }) => `tab-button ${isActive ? 'active' : ''}`}
                >
                    Watchlist
                </NavLink>
            </nav>

            <main className="content-area">
                {/* Renders the content for the active tab (Liked, Disliked, Watchlist) */}
                <Outlet />
            </main>
        </div>
    );
};

export default UserProfile;
