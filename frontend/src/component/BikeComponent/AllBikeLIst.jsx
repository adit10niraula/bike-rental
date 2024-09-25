import React, { useState } from 'react';
import SingleComponent from './SingleComponent';

const AllBikeList = ({ bikes = [], handleRent }) => {
  const [sortOption, setSortOption] = useState('type-asc'); // Default sorting option: ascending by bike type

  // Sorting logic based on the bikeType
  const sortedBikes = [...bikes].sort((a, b) => {
    switch (sortOption) {
      case 'type-asc':
        return a?.bikeType?.localeCompare(b?.bikeType);
      case 'type-desc':
        return b?.bikeType?.localeCompare(a?.bikeType);
      default:
        return 0;
    }
  });

  return (
    <div>
      {/* Sorting Dropdown for Bike Type */}
      <div className="sort-dropdown">
        <label htmlFor="sort">Sort By Bike Type: </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="type-asc">Mountain</option>
          <option value="type-desc">Standard</option>
        </select>
      </div>

      {/* Displaying the bikes */}
      <div className="all-bike-container">
        {sortedBikes && sortedBikes.length > 0 ? (
          sortedBikes.map((bike, index) => (
            <SingleComponent key={index} bike={bike} handleRent={handleRent} />
          ))
        ) : (
          <p>No bikes available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default AllBikeList;

