function Search() {
    return (
        <div className="container">
            <h1>Search Events</h1>
            <div className="search-section">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search events, categories, locations..."
                        className="search-input"
                    />
                    <button className="btn btn-primary">Search</button>
                </div>

                <div className="filters">
                    <select className="filter-select">
                        <option>All Categories</option>
                        <option>Business</option>
                        <option>Technology</option>
                        <option>Education</option>
                        <option>Entertainment</option>
                    </select>

                    <select className="filter-select">
                        <option>All Locations</option>
                        <option>Online</option>
                        <option>In-person</option>
                        <option>Hybrid</option>
                    </select>

                    <input
                        type="date"
                        className="date-input"
                        placeholder="Select Date"
                    />
                </div>

                <div className="search-results">
                    <h3>Upcoming Events</h3>
                    <div className="event-list">
                        <p>Use the search bar above to find events...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;