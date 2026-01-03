function MyBooking() {
    const bookings = [
        {
            id: 1,
            eventName: "Tech Conference 2024",
            date: "2024-03-15",
            status: "Confirmed",
            location: "San Francisco, CA"
        },
        {
            id: 2,
            eventName: "Product Launch Webinar",
            date: "2024-02-28",
            status: "Upcoming",
            location: "Online"
        },
        {
            id: 3,
            eventName: "Networking Mixer",
            date: "2024-01-20",
            status: "Completed",
            location: "New York, NY"
        }
    ];

    return (
        <div className="container">
            <h1>My Bookings</h1>

            <div className="bookings-summary">
                <div className="summary-card">
                    <h3>Total Bookings</h3>
                    <p className="summary-number">12</p>
                </div>
                <div className="summary-card">
                    <h3>Upcoming</h3>
                    <p className="summary-number">5</p>
                </div>
                <div className="summary-card">
                    <h3>Completed</h3>
                    <p className="summary-number">7</p>
                </div>
            </div>

            <div className="bookings-list">
                <h2>Recent Bookings</h2>
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.id}>
                                <td>{booking.eventName}</td>
                                <td>{booking.date}</td>
                                <td>{booking.location}</td>
                                <td>
                                    <span className={`status-badge status-${booking.status.toLowerCase()}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn-action">View</button>
                                    <button className="btn-action">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyBooking;