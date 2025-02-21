window.addEventListener("scroll", function() {
    let background = document.querySelector(".head");
    if (window.scrollY > 600) { 
        background.classList.add("scrolled");
    } else {
        background.classList.remove("scrolled");
    }
});
const links = document.querySelectorAll('.link');
const textDivs = document.querySelectorAll('.textcontent');
let currentIndex = 0;
let autoCycle; 

textDivs.forEach(text => text.style.display = 'none');

function showText(textId) {  
    clearInterval(autoCycle);   
   
    textDivs.forEach(text => text.style.display = 'none'); 
    document.getElementById(textId).style.display = 'block'; 

    
    setTimeout(startAutoCycle, 10000);
}


links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetText = link.getAttribute('data-target');
        showText(targetText);
    });
});

function cycleContent() {
    textDivs.forEach(text => text.style.display = 'none');
    textDivs[currentIndex].style.display = 'block';

    currentIndex = (currentIndex + 1) % textDivs.length; 
}

function startAutoCycle() {
    cycleContent(); 
    autoCycle = setInterval(cycleContent, 8000);
}

setTimeout(startAutoCycle, 3000);

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); 

    localStorage.setItem('inputdata', JSON.stringify(data));
    form.reset();

    displayStoredData(); 
});

function displayStoredData() {
    const storedData = localStorage.getItem('inputdata');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log("Retrieved Data:", parsedData);
    }
}
