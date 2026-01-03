import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 style={{ fontSize: '4rem', color: '#0071e3' }}>404</h1>
            <h2>Page Not Found</h2>
            <p style={{ margin: '20px 0 30px', color: '#666' }}>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/home" className="btn btn-primary">
                Go Back Home
            </Link>
        </div>
    );
}

export default NotFound;