import React from 'react';
import ListingHeader from './components/listingHeader';
import Sort from './components/listingSort';
import InfoAlert from './components/alert';
import ListingDetails from './components/listingDetails';

function Listings() {
    return(
        <div className="App">
            <ListingHeader />
            <ListingDetails 
            street="123 street name"
            city="Nesconset"
            zipcode="11767"
            price="1300"
            />
        </div>
    );
}

export default Listings;