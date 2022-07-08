console.log('***** Music Collection *****')

let collection = [];

function addToCollection( albumName, artistName, year, tracks) {
    let newAlbum = {
        title: albumName,
        artist: artistName,
        yearPublished: year,
        tracks: tracks
    }
    collection.push(newAlbum);
    console.log(collection[collection.length - 1]);
}

// For the addToCollection section I added all elements to the object and the came back an added the 'tracks' item. Below I added the tracks
// as an array in the add to collection function. Each time add to collection is run we console log the last item added.

addToCollection(
    'Come Over When You\'re Sober, Part. 1',
    'Lil Peep',
    2017,
    [
       {name: 'Benz Truck', duration: '2:39'},
       {name: 'Save That Sh*t', duration: '3:51'},
       {name: 'Awful Things', duration: '3:34'},
       {name: 'U Said', duration: '3:44'},
       {name: 'Better Off', duration: '2:34'},
       {name: 'The Brightside', duration: '3:36'},
       {name: 'Problems', duration: '3:29'}
    ]);
addToCollection(
    'Dr. Feelgood',
    'Motley Crue',
    1989,
    [
        {name: 'Dr. Feelgood', duration: '4:51'},
        {name: 'Kickstart My Heart', duration: '4:44'}
     ]);
addToCollection(
    'Star Shopping',
    'Lil Peep',
    2017,
    [
        {name: 'Star Shopping', duration: '2:22'}
     ]);
addToCollection(
    'Tickets to My Downfall',
    'MGK',
    2020,
    [
        {name: 'Title Track', duration: '2:45'},
        {name: 'kiss kiss', duration: '2:18'},
        {name: 'Drunk Face', duration: '2:23'},
        {name: 'Bloody Valentine', duration: '3:25'},
        {name: 'Forget Me Too', duration: '2:51'},
        {name: 'Nothing Inside', duration: '2:52'}
     ]);
addToCollection(
    'Photographs & Memories',
    'Jim Croce',
    1972,
    [
        {name: 'Operator', duration: '3:50'},
        {name: 'Time in a Bottle', duration: '2:26'},
        {name: 'Rapid Roy', duration: '2:26'},
        {name: 'Box #10', duration: '2:24'}
     ]);
addToCollection(
    'Mama Tried',
    'Merle Haggard & The Strangers',
    1968,
    [
        {name: 'Mama Tried', duration: '2:14'}
     ]);

// After adding all of the albums to the collection. I console log the collection to make sure they have all been added.

console.log(collection);

// In the show collection section I came up with a way loop through each album and song. I created a variable called number and 
// set the value to 0 to check the first album. As it goes through the first for loop, we concole log the album name and get into
// a second loop where it goes through each song in the album and console logs that song name and durraction. Once we get to the 
// end of the nested for loop that checks songs. we add 1 to the 'number' variable and go back through the parent loops that goes
// through the albums and repeat until all albums and songs have been console logged.

function showCollection( collectionIndex ) {
    console.log('When searching the object at index 1, we expect Dr. Feelgood by Motley Crue');
    console.log(collection[collectionIndex]);
    console.log('There are ' + collection.length + ' Albums in this collection');

    let number = 0;
    for ( let i = 0; i<collection.length; i++) {
        console.log( collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);

        for ( let i = 0; i<collection[number].tracks.length; i++){
        console.log( i+1 + '. Title: ' + collection[number].tracks[i].name + " Duration: " + collection[number].tracks[i].duration );
        } //end track for loop
        number += 1; //Adding 1 to number variable to go to next album in array.
    } //end album for loop
} //end showCollection function

showCollection(1); //here we are calling the showCollection function so it will show this on top and console log all of the albums 
// in the collection.


// In the find artist section. I created the function to take in artists name, then created a variable with an empty array to hold
// any matching items. This functions loops through all of the albums and and return the matched search array at the end.

function findByArtist( artistName ){
    let matchedSearch = [];

    for ( let i = 0; i<collection.length; i++)
         if ( artistName === collection[i].artist ) {
            matchedSearch.push(collection[i]);
    } else {

    }
    return matchedSearch;
}

console.log('Searching Lil Peep, We expect 2 matches found');
console.log(findByArtist( 'Lil Peep' ));
console.log('Searching Merle Haggard & The Strangers, We expect 1 match found');
console.log(findByArtist( 'Merle Haggard & The Strangers' ));
console.log('Searching G-Eazy, We expect 0 matches found');
console.log(findByArtist( 'G-Eazy' ));


//For the updated search section. I used the same concept as how I console logged all songs to go through all songs. However,
// I mad the for loop that runs through the album titles only check artist and year. If artist and year match, then it goes through
// the songs in that album to check for trackName matches. I also only pushed the track information into the search results tab.
// At the end of this it returns the searchREsults array. I wrapped the loops in an iff statement so if no parrameters are endered,
// the function will console log the whole colection.


function search( artistName, year, track ){
    let searchResults = [];
    let number = 0;
    if (arguments.length > 0){

        for ( let i = 0; i<collection.length; i++){
            if ( artistName === collection[number].artist && year === collection[number].yearPublished ){
                for ( let i = 0; i<collection[number].tracks.length; i++ ) {
                    if ( track === collection[number].tracks[i].name ) {
                         searchResults.push(collection[number].tracks[i]);
                    } else {

                    } //end 'track' if statement
                } //end 'track' for loop
                number += 1; //Adding 1 to number variable to go to next album in array.
            } else {
                number += 1; //Adding 1 to number variable to go to next album in array.
            } //end 'album' if statement      

            } //end 'album' for loop
            
        return searchResults;
    } else {
        for ( let i = 0; i<collection.length; i++ ){
            searchResults.push(collection[i]);
        } //end for loop for pushing all of collection.
        return searchResults;
    } //end argument if statement
} //end search function

// We expect one result with this search.
console.log('We are searching for Lil Peep, 2017, & Benz Truck', search( 'Lil Peep', 2017, 'Benz Truck' ));
// We expect no result with this search.
console.log('We are searching for Young Dolph and 2021', search( 'Young Dolph', 2021 ));
// We expect the whole collection to be logged with this search.
console.log('We are leaving search blank', search());

