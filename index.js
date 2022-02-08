var downloadbutton = document.getElementById('downloadbutton');
downloadbutton.addEventListener('click', function(event) {
    firebase.database()
    .ref('node')
    .child('clicks')
    .set(firebase.database.ServerValue.increment(1))
})