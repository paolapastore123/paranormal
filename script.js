document.querySelectorAll(".card img").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", function () {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

document.querySelector(".modal .close").onclick = function () {
  document.getElementById("imgModal").style.display = "none";
};

document.getElementById("imgModal").onclick = function (e) {
  if (e.target === this) this.style.display = "none";
};

// Play music



  const music = document.getElementById('bgMusic');
  const button = document.getElementById('toggleMusicBtn');

   button.addEventListener('click', () => {
    if (music.paused) {
      music.play().then(() => {
        button.textContent = 'Pause Music';
      }).catch(err => {
        console.log('Play failed:', err);
      });
    } else {
      music.pause();
      button.textContent = 'Play Music';
    }
  });

/* CLOVER ANIMATION IN FRAME */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.clover, .alien, .zombie-section');

  sections.forEach(section => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          // 🧟 Handle zombies separately
          if (section.classList.contains('zombie-section')) {
            const zombies = section.querySelectorAll('.zombie');
            zombies.forEach((zombie, i) => {
              // Ensure at least 0.5s between each zombie
              const minDelay = 0.5; // seconds
              const jitter = Math.random() * 0.5; // add some randomness
              const delay = i * minDelay + jitter;

              // Stagger vertical positions slightly too
              zombie.style.bottom = `${-50 + Math.random() * 30}px`;

              // Apply delays to animation
              zombie.style.animationDelay = `${delay}s`;
              zombie.querySelector('img').style.animationDelay = `${delay}s`;

              setTimeout(() => {
                zombie.classList.add('animate');
              }, delay * 1000);
            });
          } else {
            section.classList.add('animate');
          }

          observer.unobserve(section);
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(section);
  });
});