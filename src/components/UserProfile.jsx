import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const UserProfile = () => {
    return (
        <div className="profile-container">
            <header className="profile-header">
                <img 
                    src="" 
                    alt="User Profile" 
                    className="profile-picture" 
                />
                <div className="profile-info">
                    <h1>YourUsername</h1>
                    <p>@yourusername • 1.2K Subscribers • 150 Videos</p>
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
                {/* The Outlet component renders the matched nested route's component */}
                <Outlet />
            </main>
        </div>
    );
};

export default UserProfile;