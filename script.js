document.addEventListener("DOMContentLoaded", function () {
    // Variables generales
    const audio = document.getElementById("audioPlayer");
    const playPauseButton = document.getElementById("playPauseButton");
    const iconoPlayPause = document.getElementById("iconoPlayPause");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeDisplay = document.getElementById("current-time");
    const durationTimeDisplay = document.getElementById("duration-time");
    const modal = document.getElementById('photo-modal');
    const seal = document.getElementById("seal");
    const wishes = [];
    let currentSlide = 0;

    // 📨 Abrir sobre y reproducir música
function openEnvelopeAndPlayMusic() {
    const envelopeTop = document.getElementById("envelope-top");
    const envelopeBottom = document.getElementById("envelope-bottom");
    const envelope = document.getElementById("envelope");
    const invitation = document.getElementById("invitation");

    // Paso 1: animación del sobre
    requestAnimationFrame(() => {
        envelopeTop.style.transform = 'translateY(-100vh)';
        envelopeBottom.style.transform = 'translateY(100vh)';
    });

    // Paso 2: mostrar invitación
    setTimeout(() => {
        envelope.classList.add('hidden');
        invitation.classList.remove('hidden');
    }, 1000);

    // Paso 3: reproducir música con pequeño delay
    setTimeout(() => {
        audio.play().then(() => {
            // ✅ Ahora usamos requestIdleCallback para tareas menos urgentes
            requestIdleCallback(() => {
                iconoPlayPause.classList.remove("fa-play");
                iconoPlayPause.classList.add("fa-pause");
                updateProgress();
            });
        }).catch((error) => {
            console.log('Playback failed: ', error);
            requestIdleCallback(() => {
                iconoPlayPause.classList.add("fa-play");
                iconoPlayPause.classList.remove("fa-pause");
            });
        });
    }, 100);
}

    // 🖱️ Evento del sello (1 sola vez)
    seal.addEventListener("click", function (event) {
        event.stopPropagation();
        openEnvelopeAndPlayMusic();
    });

    // ▶️ Reproducir/pausar música
    function togglePlayPause() {
        if (!audio || !iconoPlayPause) return;

        requestAnimationFrame(() => {
            iconoPlayPause.classList.toggle("fa-play");
            iconoPlayPause.classList.toggle("fa-pause");
        });

        setTimeout(() => {
            if (audio.paused) {
                audio.play().catch(console.error);
            } else {
                audio.pause();
            }
        }, 50);
    }

    // ⏱️ Progreso de la música
    function updateProgress() {
        audio.addEventListener("timeupdate", function () {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;

            const formatTime = (time) => {
                const minutes = Math.floor(time / 60);
                const seconds = Math.floor(time % 60);
                return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            };

            currentTimeDisplay.textContent = formatTime(audio.currentTime);

            if (!isNaN(audio.duration)) {
                durationTimeDisplay.textContent = formatTime(audio.duration);
            }
        });
    }

    progressBar.addEventListener("input", function () {
        const newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
    });

    playPauseButton.addEventListener("click", togglePlayPause);

    // ⏳ Cuenta regresiva
    const targetDate = new Date('2025-06-14T00:00:00').getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.countdown').textContent = "Gracias por habernos acompañado en este día tan especial.";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);

    // 💬 Deseos
    function submitWish() {
        const name = document.getElementById('wish-name').value;
        const message = document.getElementById('wish-message').value;

        if (name && message) {
            wishes.push({ name, message });
            document.getElementById('wish-name').value = '';
            document.getElementById('wish-message').value = '';
            toggleWishForm();
            displayWishes();
        }
    }

    function displayWishes() {
        const wishesDiv = document.getElementById('wishes');
        wishesDiv.innerHTML = wishes.map(wish => `<p><strong>${wish.name}:</strong> ${wish.message}</p>`).join('');
    }

    function toggleWishForm() {
        document.getElementById('wish-form').classList.toggle('hidden');
    }

    function toggleWishes() {
        document.getElementById('wishes').classList.toggle('hidden');
        displayWishes();
    }

    // 🎨 Efecto de fade-in al hacer scroll
    const elementsToFade = document.querySelectorAll('.fade-in-element');

    elementsToFade.forEach((element, index) => {
        const delay = index * 0.05;
        element.style.transitionDelay = `${delay}s`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementsToFade.forEach(element => {
        observer.observe(element);
    });

    // 👀 Mostrar título al cargar
    document.querySelector(".title").classList.add("visible");
});

// 🖼️ Galería y modal de imágenes
function changePhoto(element) {
    const mainPhotoModal = document.getElementById('main-photo');
    const mainPhoto = document.getElementById('main-photo-modal');

    mainPhoto.src = element.src;
    mainPhotoModal.src = element.src;

    if (element !== mainPhoto) {
        openModal();
    }
}

function openModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'none';
}

document.querySelector('.close').addEventListener('click', closeModal);

document.getElementById('photo-modal').addEventListener('click', function (event) {
    if (event.target === this) {
        closeModal();
    }
});

// 🔁 Mostrar detalles y secciones
function toggleDetails(id) {
    const element = document.getElementById(id);
    element.style.display = (element.style.display === "none" || element.style.display === "") ? "block" : "none";
}

function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = (section.style.display === "none" || section.style.display === "") ? "block" : "none";
}
