function renderStars(rating) {
    const starWrap = document.createElement('div');

    for (let i = 0; i < 5; i++) {
        const starSvg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );
        const starPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );

        starSvg.classList.add('rating__icon');

        if (i < rating) {
            starSvg.classList.add('filled'); // Додаємо клас, якщо зірка має бути зафарбована
        } else {
            starSvg.classList.add('empty'); // Додаємо клас, якщо зірка має бути порожньою
        }

        starSvg.setAttribute('viewBox', '0 0 32 32');
        starSvg.setAttribute('width', '18');
        starSvg.setAttribute('height', '18');

        starPath.setAttribute(
            'd',
            'M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z'
        );

        starSvg.appendChild(starPath);
        starWrap.append(starSvg);
    }

    return starWrap;
}

export { renderStars };