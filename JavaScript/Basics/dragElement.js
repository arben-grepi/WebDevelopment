// Määritellään raahausalue
var uploadArea = document.getElementById('upload-area');

// Lisätään dragover-tapahtumankäsittelijä, joka estää oletustoiminnot (jotta raahaus toimii)
uploadArea.addEventListener('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = 'copy'; // Näyttää käyttäjälle, että tiedosto(t) voi pudottaa
});

// Lisätään drop-tapahtumankäsittelijä, joka käsittelee pudotetut tiedostot
uploadArea.addEventListener('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  var files = e.dataTransfer.files; // Saadaan raahatut tiedostot

  if (files.length) {
    var event = { target: { files: files } }; // Luodaan pseudo-event, joka jäljittelee inputin change-eventtiä
    processExcelFile(event); // Kutsutaan funktiota käsittelemään tiedosto(t)
  }
});
