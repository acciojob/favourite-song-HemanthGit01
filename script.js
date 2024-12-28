// JavaScript to dynamically set the song name and link
// Create and insert the content for the favorite song

// Select the body and dynamically append content
const body = document.querySelector("body");

// Create the main container
const songContainer = document.createElement("div");
songContainer.id = "song-container";

// Set the text and link for the favorite song
const songName = "Shape of You";
const songLink = "https://www.youtube.com/watch?v=KkGVmN68ByU";

// Create a paragraph element with the song information
const songParagraph = document.createElement("p");
songParagraph.innerHTML = `My current favourite song is <a href="${songLink}" target="_blank">${songName}</a>.`;

// Append the paragraph to the container
songContainer.appendChild(songParagraph);

// Append the container to the body
body.appendChild(songContainer);
