// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// 1. Countdown Timer Logic
const weddingDate = new Date("June 14, 2026 16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    if (gap <= 0) {
        document.getElementById("countdown").innerText = "The Celebration has Begun!";
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById("countdown").innerText = 
        `${d}d : ${h}h : ${m}m : ${s}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 2. FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Close other open items (Optional)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

        faqItem.classList.toggle('active');
    });
});

// 3. Floating Sparkles (Pixie Dust)
const sparkleContainer = document.getElementById('sparkles-container');

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Random Position and Animation
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = '100vh';
    sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    sparkle.style.opacity = Math.random();
    
    sparkleContainer.appendChild(sparkle);

    // Remove sparkle after animation ends to save memory
    setTimeout(() => {
        sparkle.remove();
    }, 5000);
}
setInterval(createSparkle, 200);

// // 4. Music Toggle Logic
// let isPlaying = false;
// const music = document.getElementById("bg-music");
// const musicIcon = document.getElementById("music-icon");

// function toggleMusic() {
//     if (isPlaying) {
//         music.pause();
//         musicIcon.innerText = "🔇";
//     } else {
//         music.play().catch(e => console.log("Audio play blocked by browser. User interaction required."));
//         musicIcon.innerText = "🎵";
//     }
//     isPlaying = !isPlaying;
// }


// 1. Entrance Logic & Music Start
const entranceOverlay = document.getElementById('entrance-overlay');
const enterBtn = document.getElementById('enter-btn');
const music = document.getElementById("bg-music");
const musicIcon = document.getElementById("music-icon");
let isPlaying = false;

enterBtn.addEventListener('click', () => {
    // Hide overlay
    entranceOverlay.classList.add('hidden');
    
    // Play Music
    music.play().then(() => {
        isPlaying = true;
        musicIcon.innerText = "🎵";
    }).catch(error => {
        console.log("Autoplay was prevented by browser.");
    });
    
    // Initialize AOS after entering
    AOS.refresh();
});

// 2. Toggle Music (Manual control after it's started)
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.innerText = "🔇";
    } else {
        music.play();
        musicIcon.innerText = "🎵";
    }
    isPlaying = !isPlaying;
}

/* ... keep the rest of your previous code (Countdown, Sparkles, FAQ) below ... */
// 5. RSVP Form Submission
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real app, you would use Fetch API to send data to a spreadsheet or email
    alert("✨ Your royal response has been delivered to the Palace! ✨");
    this.reset();
});



const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    // Shows button after scrolling down 400px
    if (window.pageYOffset > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});