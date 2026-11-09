
document.getElementById('candidateForm').addEventListener('submit', function(event) {
event.preventDefault();
const formData = new FormData(this);
const data = Object.fromEntries(formData.entries());
fetch https://formspree.io/f/xdeeqnna
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
})
.then(response => response.json())
.then(result => {
console.log('Success:', result);
alert('Kandidat uspešno dodat!');
})
.catch((error) => {
console.error('Error:', error);
alert('Došlo je do greške.');
});
});



