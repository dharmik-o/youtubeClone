import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import "../styles/HomePage.css"
export default function HomePage() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar isOpen={""}/>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>  
  )
}
