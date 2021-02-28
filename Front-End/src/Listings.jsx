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
            street="123 address lane"
            city="Nesconset"
            zipcode="11767"
            price="1500"
            features={["covid", "view", "food", "pets"]} />
        </div>
    );
}

export default Listings;