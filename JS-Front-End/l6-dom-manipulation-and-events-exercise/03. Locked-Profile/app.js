function lockedProfile() {
    const profileEls = document.querySelectorAll('.profile');

    profileEls.forEach(profile => {
        const button = profile.querySelector('button');
        button.addEventListener('click', () => {
            const [lock, unlock] = profile.querySelectorAll('input[type="radio"]');
            const hiddenEl = button.previousElementSibling;

            if(lock.checked) {
                return;
            }

            if (unlock.checked && button.textContent === 'Hide it') {
                hiddenEl.style.display = 'none';
                button.textContent = 'Show more';
            } else if (unlock.checked) {
                hiddenEl.style.display = 'block';
                button.textContent = 'Hide it';
            }
        })
    })
}
