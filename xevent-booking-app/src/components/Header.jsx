import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/home">Event Tracker</Link>
                    </div>
                    <div className="nav-links">
                        <Link
                            to="/home"
                            className={location.pathname === '/home' ? 'active' : ''}
                        >
                            Home
                        </Link>
                        <Link
                            to="/search"
                            className={location.pathname === '/search' ? 'active' : ''}
                        >
                            Search Events
                        </Link>
                        <Link
                            to="/my-booking"
                            className={location.pathname === '/my-booking' ? 'active' : ''}
                        >
                            My Bookings
                        </Link>
                    </div>
                    <div className="auth-buttons">
                        <button className="btn btn-secondary">Welcome</button>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;