import FAQ from '../components/FAQ';
import '../App.css';

function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Skip the hassle! Track Online Event Tracker</h1>
                    <p>Connect instantly with our platform to manage and track your events efficiently.</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-secondary">Watch Demo</button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Event Tracking</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
                    Our goal is to provide exceptional event experience in business, education, and everyday service.
                    We help you deliver potential and outstanding work and progress.
                </p>

                <div className="features">
                    <div className="feature-card">
                        <h3>📅 Stay Updated About Events</h3>
                        <p>Get real-time notifications and updates about your events and bookings.</p>
                    </div>

                    <div className="feature-card">
                        <h3>✏️ Create Event Details Online</h3>
                        <p>Easily create and manage event details with our intuitive online platform.</p>
                    </div>

                    <div className="feature-card">
                        <h3>📊 Manage Your Bookings</h3>
                        <p>Track, modify, and cancel bookings all in one place with detailed analytics.</p>
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="container" style={{ marginTop: '80px' }}>
                <h2 style={{ marginBottom: '30px' }}>Read Our Latest News</h2>
                <div className="news-grid">
                    <div className="news-card">
                        <h3>Event Tracker Update v2.0</h3>
                        <p>New features include calendar sync, team collaboration, and enhanced analytics.</p>
                    </div>
                    <div className="news-card">
                        <h3>Mobile App Released</h3>
                        <p>Download our new mobile app for iOS and Android with offline capabilities.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container" style={{ marginTop: '80px' }}>
                <FAQ />
            </section>

            {/* App Download Section */}
            <section className="container" style={{ marginTop: '80px', textAlign: 'center' }}>
                <h2>Download the Event Tracker App</h2>
                <p style={{ margin: '20px 0' }}>Available on iOS and Android</p>
                <div style={{ marginTop: '30px' }}>
                    <p>Visit: <a href="https://www.eventtracker.com">www.eventtracker.com</a></p>
                    <div style={{ marginTop: '20px' }}>
                        <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                            App Store
                        </button>
                        <button className="btn btn-primary">
                            Google Play
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;