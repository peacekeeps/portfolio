const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if (prop == "tracks") {
      if (!records[id].hasOwnProperty(prop)) {
        records[id][prop] = [];
      }

      if (value != "") {
        records[id][prop].push(value);
      } else {
        delete records[id][prop];
      }

  } else {
      if (!records[id].hasOwnProperty(prop)) {
        records[id][prop] = [];
      }
      if (value != "") {
        records[id][prop] = value;
      } else {
        delete records[id][prop];
      }
  }


    return records
  }


updateRecords(recordCollection, 5439, 'artist', 'ABBA');

updateRecords(recordCollection, 5439, "tracks", "Dancing Queen");

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

console.log(recordCollection);
