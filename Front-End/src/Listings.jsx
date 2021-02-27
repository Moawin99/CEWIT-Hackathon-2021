import React from 'react';
import ListingHeader from './components/listingHeader';
import Sort from './components/listingSort';

function Listings() {
    return(
        <div className="App">
            <ListingHeader />
            <Sort />
        </div>
    );
}

export default Listings;