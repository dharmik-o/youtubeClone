import React from 'react'
import { NavLink } from 'react-router-dom';
const Sidebar = ({ isOpen }) => {
        
    const MovieSuggestionsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="m12 9-2 4h4l-2 4"/></svg>
    );

    const LikedVideosIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
    );

    const DislikedVideosIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 14V2"/><path d="M15 18.12 14 14H8.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 10.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
    );

    const WatchlistIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
    );

    return (
        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
    <ul className="sidebar-nav">
        <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                <MovieSuggestionsIcon />
                Movie Suggestions
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/liked" className={({ isActive }) => isActive ? 'active' : ''}>
                <LikedVideosIcon />
                Liked Videos
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/disliked" className={({ isActive }) => isActive ? 'active' : ''}>
                <DislikedVideosIcon />
                Disliked Videos
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/watchlist" className={({ isActive }) => isActive ? 'active' : ''}>
                <WatchlistIcon />
                Watchlist
            </NavLink>
        </li>
    </ul>
</nav>
    );
};

export default Sidebar;