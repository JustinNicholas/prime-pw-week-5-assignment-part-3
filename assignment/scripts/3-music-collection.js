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

console.log(collection);

function showCollection( collectionIndex ) {
    console.log('When searching the object at index 1, we expect Dr. Feelgood by Motley Crue');
    console.log(collection[collectionIndex]);
    console.log('There are ' + collection.length + ' Albums in this collection');

    let number = 0;
    for ( let i = 0; i<collection.length; i++) {
        console.log( collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);

        for ( let i = 0; i<collection[number].tracks.length; i++){
        console.log( 'Title: ' + collection[number].tracks[i].name + " Duration: " + collection[number].tracks[i].duration );
        }
        number += 1;
    }
}

showCollection(1);

function findByArtist( artistName ){
    let matchedSearch = [];

    for ( let i = 0; i<collection.length; i++)
         if ( artistName === collection[i].artist ) {
            matchedSearch.push(collection[i])
    } else {

    }
    console.log(matchedSearch);
}

console.log('Searching Lil Peep, We expect 2 matches found');
findByArtist( 'Lil Peep' );
console.log('Searching Merle Haggard & The Strangers, We expect 1 match found');
findByArtist( 'Merle Haggard & The Strangers' )
console.log('Searching G-Eazy, We expect 0 matches found');
findByArtist( 'G-Eazy' )

function search( artistName, year ){
    let searchResults = [];
    if (arguments.length > 0){
        for ( let i = 0; i<collection.length; i++ ){
            if ( artistName === collection[i].artist && year === collection[i].yearPublished){
                searchResults.push(collection[i]);
            } else {

            }
        }
        return searchResults;
    } else {
        for ( let i = 0; i<collection.length; i++ ){
            searchResults.push(collection[i]);
        }
        return searchResults;
    }
}

console.log('We are searching for Lil Peep and 2017', search( 'Lil Peep', 2017 ));
console.log('We are searching for Young Dolph and 2021', search( 'Young Dolph', 2021 ));
console.log('We are leaving search blank', search());

