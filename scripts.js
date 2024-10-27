// Array of GIFs
const gifList = [
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZhazB3MXliaGFjeXRqMnA0MWdyNDkwZzhqeGx6YzViYnpjcTNoOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/maokMAp3VLJT2/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTkwNGNqYTJ5ZHEzd3V1Mmc3cWMzb3Q0N2h0NXQ5ZXNseG9haXk0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KveaeXkT2j90FgTurz/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzN3aXNmN3Y4eHR2OGdoYmIxNTI3M3k4ZDlrNXczcjlsYzlhOGZ1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LPThd7nZwKGZs91Hdz/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHl3OGE2aXU2OWh3Ymdla2hzYW16am9odG9rb3V0bzJlYmVxNWc0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26Ec7TKFZ9XED3MM8/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzN3aXNmN3Y4eHR2OGdoYmIxNTI3M3k4ZDlrNXczcjlsYzlhOGZ1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LPThd7nZwKGZs91Hdz/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzN3aXNmN3Y4eHR2OGdoYmIxNTI3M3k4ZDlrNXczcjlsYzlhOGZ1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LPThd7nZwKGZs91Hdz/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzN3aXNmN3Y4eHR2OGdoYmIxNTI3M3k4ZDlrNXczcjlsYzlhOGZ1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LPThd7nZwKGZs91Hdz/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzUxYTYyd3dycjc2am1oZ3hrMGVhZGRlNzIyYmwwejBvcjRlZHQ3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WT3rmbhBp8bDXRS95L/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzUxYTYyd3dycjc2am1oZ3hrMGVhZGRlNzIyYmwwejBvcjRlZHQ3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WT3rmbhBp8bDXRS95L/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXZ0NGtzaXp0bzhndmNyaTd6aXAyenA5dnRyZ3FkZG5ycDYxOHJvOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9EARJISh6VwDm/giphy.gif',
    'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXB1ZWxnZGV4am11Z3J5cDNwazAzM2p2YjF6bDN3emppaHUzcnVhcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vQYMjq8mIvg5weA/giphy-downsized-large.gif',
    'https://media0.giphy.com/media/tZ8vM5Y6zGyGxHpXAJ/giphy.gif?cid=9b38fe91kvr4vrvqlg6m17xb0q8nynwlbbz6hn5t8g900sh7&ep=v1_gifs_username&rid=giphy.gif&ct=g',
    // Add more GIFs here
];

// Function to display a random GIF
function displayRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifList.length);
    const randomGif = gifList[randomIndex];
    document.getElementById('random-gif').src = randomGif;
}

// Call the function when the page loads
window.onload = displayRandomGif;
