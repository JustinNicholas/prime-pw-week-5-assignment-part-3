console.log('***** Music Collection *****')

let collection = [];

function addToCollection( albumName, artistName, year) {
    let newAlbum = {
        title: albumName,
        artist: artistName,
        yearPublished: year
    }
    collection.push(newAlbum);
    console.log(collection[collection.length - 1]);
}

addToCollection( 'Come Over When You\'re Sober, Part. 2', 'Lil Peep', 2018);
addToCollection( 'Dr. Feelgood', 'Motley Crue', 1989);
addToCollection( 'Star Shopping', 'Lil Peep', 2017);
addToCollection( 'Tickets to My Downfall', 'MGK', 2020);
addToCollection( 'Photographs & Memories', 'Jim Croce', 1972);
addToCollection( 'Mama Tried', 'Merle Haggard & The Strangers', 1968);

console.log(collection);

function showCollection( collectionIndex ) {
    console.log('When searching the object at index 1, we expect Dr. Feelgood by Motley Crue');
    console.log(collection[collectionIndex]);
    console.log('There are ' + collection.length + ' Albums in this collection');

    for ( let i = 0; i<collection.length; i++) {
        console.log( collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);
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

console.log('We are searching for Lil Peep and 2018', search( 'Lil Peep', 2018));
console.log('We are searching for Yo Gotti and 2022', search( 'Yo Gotti', 2022));
console.log('We are leaving search blank', search());
