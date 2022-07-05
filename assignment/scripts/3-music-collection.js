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
addToCollection( 'Sleeping on the Blacktop', 'Colter Wall', 2015);
addToCollection( 'Title Track', 'MGK', 2020);
addToCollection( 'Rapid Roy', 'Jim Croce', 1972);
addToCollection( 'Mama Tried', 'Merle Haggard & The Strangers', 1968);

