import React from 'react';
import ListingHeader from './components/listingHeader';
import Sort from './components/listingSort';
import InfoAlert from './components/alert';
import ListingDetails from './components/listingDetails';

function Listings() {
    return(
        <div className="App">
            <ListingHeader />
            <Sort />
            <InfoAlert />
        </div>
    );
}

export default Listings;