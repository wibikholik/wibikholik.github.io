const fabToggle = document.getElementById('fabToggle');
const fabLinks = document.getElementById('fabLinks');

fabToggle.addEventListener('click', () => {
    fabLinks.classList.toggle('active');
    fabToggle.classList.toggle('active');
    if (fabToggle.classList.contains('active')) {
        fabToggle.innerHTML = `
            <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        `;
    } else {
        fabToggle.innerHTML = `
            <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        `;
    }
});
// === ANIMASI KLIK UNTUK AREA NGULIK ===
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', function() {
        // Hapus class dulu kalau misalnya diklik dobel biar animasinya ke-reset
        this.classList.remove('pop-active');
        
        // Trik rahasia JS buat nge-restart animasi (trigger reflow)
        void this.offsetWidth; 
        
        // Pasang class animasinya
        this.classList.add('pop-active');
        
        // Copot lagi class-nya setelah 400ms (sesuai durasi CSS)
        setTimeout(() => {
            this.classList.remove('pop-active');
        }, 400);
    });
});
// === EFEK CAHAYA SPOTLIGHT DI HERO IMAGE ===
const heroSpotlight = document.getElementById('heroSpotlight');

if (heroSpotlight) {
    heroSpotlight.addEventListener('mousemove', (e) => {
        // Ambil posisi kotak foto di layar
        const rect = heroSpotlight.getBoundingClientRect();
        
        // Hitung posisi kursor X dan Y di dalam kotak foto
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Kirim koordinatnya ke CSS
        heroSpotlight.style.setProperty('--x', `${x}px`);
        heroSpotlight.style.setProperty('--y', `${y}px`);
    });
}