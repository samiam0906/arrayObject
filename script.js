// var myArray = [1, "Sam", true, null, 0];
//
// console.log("This is myArray[2]: " + myArray[2]);
//
//
// var user1 = {
//   username: "sam",
//   password: "1234"
// }
//
// var user2 = {
//   username: "bobdole",
//   password: "2345"
// }
//
// console.log("User 1 username: " + user1.username);
// console.log("User 2 username: " + user2.username);

// var person = {
//   firstName: "Homer",
//   middleName: "Jay",
//   lastName: "Simpson"
// };
//
// // "Homer"
// // "Jay"
// // "Simpson"
// for (var key in person) {
//   console.log(person[key]);
// }
//
// // firstName
// // middleName
// // lastName
// for (var key in person) {
// //   console.log(key);
// }

// var lines = [
//     "It's me.",
//     'Can you hear me?',
//     'from the other side',
//     'from the outside'
// ];
//
// for (var i = 0; i < lines.length; i++) {
//   console.log("Hello " + lines[i]);
// };

function toArray(lyrics) {
  var lyricsArray = lyrics.split(" ");
  var counter = 0;
  for (var i = 0; i<lyricsArray.length; i++) {
    if (lyricsArray[i] === "bounce" || lyricsArray[i] === "Bounce") {
      counter ++;
    }
  }
  console.log(counter);
}

toArray("Now usually I don't do this but uh Go head' on and break 'em off wit a lil' previews of the remix No I'm not tryin' to be rude, But hey pretty girl I'm feelin' you The way you do the things you do Remind me of my Lexus coup That's why im all up in your grill Tryna get you to a hotel You must be a football coach The way you got me playin' the field So baby give me that toot toot Let me give you that beep beep Runnin' her hands through my 'fro Bouncin' on 24's While they saying on the radio It's the remix to ignition Hot and fresh out the kitchen Mama rollin' that body Got every man in here wishin' Sippin' on coke and rum (rum) I'm like so what I'm drunk (drunk) It's the freakin' weekend baby I'm about to have me some fun (fun) Bounce Bounce Bounce Bounce Bounce Bounce Bounce Bounce Bounce Bounce Come on Now it's like murder she wrote Once I get you out them clothes Privacy is on the door But still they can hear you screamin' more Girl I'm feelin what you feelin No more hopin" + " and wishin' I'm bout to take my key and Stick it in the ignition So give me that toot toot Let me give you that beep beep Runnin' her hands through my 'fro Bouncin' on 24's While they saying on the radio This is the remix to ignition Hot and fresh out the kitchen Mama rollin' that body Got every man in here wishin' Sippin' on coke and rum (rum) I'm like so what I'm drunk (drunk) It's the freakin' weekend baby I'm about to have me some fun (fun) Crystal poppin' in the stretch Navigator We got food every where As if the party was catered We got fellas to my left (left) Honeys on my right (right) We bring them both together we got junkin' all night Then after the show its the (after party) And after the party its the (hotel lobby) Around about 4 you gotta (clear the lobby) Then head take it to your room and freak somebody Can I get a toot toot Can I get a beep beep Runnin' her hands through my 'fro Bouncin' on 24's While they saying on the radio It's the remix to ignition Hot and fresh out the kitchen Mama rollin' that body Got every man in here wishin' Sippin' on coke and rum (rum) I'm like so what I'm drunk (drunk) It's the freakin' weekend baby I'm about to have me some fun (fun) This is the remix to ignition Hot and fresh out the kitchen Mama rollin' that body Got every man in here wishin' Sippin' on coke and rum (rum) I'm like so what I'm drunk (drunk It's the freakin' weekend baby I'm about to have me some fun (fun) Come on Girl we off in this jeep Foggin' windows up Blastin' the radio In the back of my truck Bouncin' up and down Stroke it round and round To the remix We just thuggin' it out");
