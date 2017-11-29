// Room factory   bloc-chat-2

(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

// add rooms    bloc-chat-3
    Room.add = function(room) {
      rooms.$add(room);
      console.log(room);
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory ('Room', ['$firebaseArray', Room]);
})();


//
// $add(newData)
//
// Creates a new record in the database and adds the record to our local synchronized array.
//
// This method returns a promise which is resolved after data has been saved to the server. The promise resolves to the Firebase reference for the newly added record, providing easy access to its key.
//
// var list = $firebaseArray(ref);
// list.$add({ foo: "bar" }).then(function(ref) {
//   var id = ref.key;
//   console.log("added record with id " + id);
//   list.$indexFor(id); // returns location in the array
// });
