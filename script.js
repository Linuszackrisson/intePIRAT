function filterCategory(category) {
    const softwareItems = document.querySelectorAll('.software');
    
    softwareItems.forEach(item => {
        const itemName = item.querySelector('h2').textContent;
        const itemCategory = item.getAttribute('data-category');

        if (category === 'ALLA') { 
            item.style.display = 'block';
        } else if (
            (category === 'Säkerhet' && itemName === 'MalwareBytes') ||
            (category === 'Mediaredigering' && (itemName === 'DaVinci Resolve' || itemName === 'VLC' || itemName === 'OBS Studio' || itemName === 'GIMP')) ||
            (category === 'Kommunikation' && (itemName === 'Discord' || itemName === 'TeamViewer')) ||
            (category === 'Verktyg' && (itemName === 'TreeSize' || itemName === 'RevoUninstaller' || itemName === 'VisualStudio' || itemName === 'ObitDriverBooster'))
        ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const buttons = document.querySelectorAll('.filter-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

