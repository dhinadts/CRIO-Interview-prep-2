function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Event Tracker</h3>
                        <p>Your ultimate solution for event management and tracking.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <a href="/home">Home</a>
                        <a href="/search">Search</a>
                        <a href="/my-booking">My Bookings</a>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>Email: support@eventtracker.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Event Tracker. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;