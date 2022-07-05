console.log('***** Music Collection *****')

let collection = [];

function addToCollection( songName, artistName, year) {
    let newSong = {
        title: songName,
        artist: artistName,
        yearPublished: year
    }
    collection.push(newSong);
    console.log(collection[collection.length - 1]);
}

addToCollection( 'Falling Down', 'Lil Peep', 2018);
addToCollection( 'Kickstart My Heart', 'Motley Crue', 1989);
addToCollection( 'Star Shopping', 'Lil Peep', 2017);
addToCollection( 'Title Track', 'MGK', 2020);
addToCollection( 'Rapid Roy', 'Jim Croce', 1972);
addToCollection( 'Mama Tried', 'Merle Haggard & The Strangers', 1968);

console.log(collection);

function showCollection( collectionIndex ) {
    console.log('The number ' + collectionIndex + " song in this collection is " + collection[collectionIndex].title);
    console.log('There are ' + collection.length + ' songs in this collection');

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