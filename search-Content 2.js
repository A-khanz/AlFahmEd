document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteList = document.getElementById('autocompleteList');

    const searchData = [
        { name: 'Allah', url: 'allah.html' },
        { name: 'angels', url: '#' },
        { name: 'Books', url: '#' },
        { name: 'kitaab', url: '#' },
        { name: 'kutub', url: '#' },
        { name: 'hajj', url: '#' },
        { name: 'islam', url: 'islam.html' },
        { name: 'fasting', url: '#' },
        { name: 'zakaat', url: '#' },
        { name: 'pillars of islam', url: 'pillars.html' },
        { name: 'pillars of faith', url: '#' },
        { name: 'prophets', url: '#' },
        { name: 'day of judgement', url: '#' },
        { name: 'destiny', url: '#' },
        { name: 'HOME', url: 'index.html', main: true },
        { name: 'TOPICS', url: 'content.html', main: true },
        { name: 'QUIZ', url: 'questions.html', main: true },
        { name: 'FEEDBACK', url: 'responses.html', main: true }
    ];

    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        autocompleteList.innerHTML = '';

        if (!value) {
            return false;
        }

        searchData.forEach(item => {
            if (item.name.toLowerCase().includes(value)) {
                const listItem = document.createElement('div');
                if (item.main) {
                    listItem.classList.add('highlighted');
                }
                listItem.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
                autocompleteList.appendChild(listItem);
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target)) {
            autocompleteList.innerHTML = '';
        }
    });
});
