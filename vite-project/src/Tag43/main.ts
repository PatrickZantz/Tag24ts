

async function fetchPicsumImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const images = await response.json();
        console.log(images);
        
    } catch (error) {
        console.error('Fehler beim Abrufen der Bilder:', error);
    }
}

// Funktion aufrufen
fetchPicsumImages();


// Funktion zum Abrufen der Kommentare
async function fetchComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const comments = await response.json();
        
        // E-Mail-Adressen ausgeben
        console.log('E-Mail-Adressen der Kommentierenden:');
        comments.forEach((comment: { email: any; }) => console.log(comment.email));
        
    } catch (error) {
        console.error('Fehler beim Abrufen der Kommentare:', error);
    }
}

// Funktion zum Abrufen und Analysieren der Posts
async function fetchAndAnalyzePosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        
        // Alle Posts ausgeben
        console.log('Alle Posts:', posts);
        
        // Höchste Post-ID finden
        const highestId = Math.max(...posts.map((post: { id: any; }) => post.id));
        console.log('Höchste Post-ID:', highestId);
        
        // Kürzesten Titel finden
        const shortestTitle = posts.reduce((shortest: string | any[], current: { title: string | any[]; }) => 
            current.title.length < shortest.length ? current.title : shortest, 
            posts[0].title
        );
        console.log('Kürzester Titel:', shortestTitle);
        
        // Längsten Body finden
        const longestBody = posts.reduce((longest: string | any[], current: { body: string | any[]; }) => 
            current.body.length > longest.length ? current.body : longest, 
            posts[0].body
        );
        console.log('Längster Body:', longestBody);
        
    } catch (error) {
        console.error('Fehler beim Abrufen der Posts:', error);
    }
}

// Funktionen aufrufen
fetchComments();
fetchAndAnalyzePosts();

// main.ts
async function fetchAndDisplayImages(): Promise<void> {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const images = await response.json();
        const container = document.getElementById('image-container');
        
        if (!container) {
            throw new Error('Container element not found');
        }
        
        images.forEach((image: { author: string; download_url: string; }) => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const figcaption = document.createElement('figcaption');
            
            img.src = image.download_url;
            figcaption.textContent = image.author;
            
            figure.appendChild(img);
            figure.appendChild(figcaption);
            container.appendChild(figure);
        });
        
    } catch (error) {
        console.error('Fehler beim Abrufen oder Anzeigen der Bilder:', error);
    }
}

// Funktion beim Laden der Seite aufrufen
document.addEventListener('DOMContentLoaded', fetchAndDisplayImages);
