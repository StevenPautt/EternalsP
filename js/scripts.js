document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.member-photo').forEach(photo => {
        photo.addEventListener('click', () => {
            const currentSrc = photo.src;
            const adultSrc = new URL(photo.getAttribute('data-adult'), window.location.href).href;
            const childSrc = new URL(photo.getAttribute('data-child'), window.location.href).href;

            photo.src = currentSrc === adultSrc ? childSrc : adultSrc;
        });
    });

    // Calcular el nivel (edad) para cada miembro
    const calculateAge = birthdate => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    document.querySelectorAll('.member-card').forEach(card => {
        const birthdate = card.getAttribute('data-birthdate');
        if (birthdate) {
            const level = calculateAge(birthdate);
            card.querySelector('.level').textContent = level;
        }
    });
});