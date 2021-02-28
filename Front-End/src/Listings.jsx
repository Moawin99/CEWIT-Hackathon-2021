import React from 'react';
import ListingHeader from './components/listingHeader';
import Sort from './components/listingSort';
import InfoAlert from './components/alert';
import ListingDetails from './components/listingDetails';
import ListingGrid from './components/listingGrid';

function Listings() {
    return(
        <div className="App">
            <ListingHeader />
           <Sort />
           <ListingGrid />
        </div>
    );
}

export default Listings;