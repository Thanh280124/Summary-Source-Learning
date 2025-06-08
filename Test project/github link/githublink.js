const githubInfor = [
     {
        id: 1,
        name: 'tech-interview-handbook',
        image: '../images/github1.jpg',
        link: 'https://github.com/yangshun/tech-interview-handbook'
    },
    {
         id: 2,
        name: 'developer-roadmap',
        image: '../images/github2.jpg',
        link: 'https://github.com/kamranahmedse/developer-roadmap'
    },
    {
         id: 3,
        name: 'free-programming-books',
        image: '../images/github3.jpg',
        link: 'https://github.com/EbookFoundation/free-programming-books'
    },
    {
         id: 4,
        name: 'resources-to-become-a-great-engineering-leader',
        image: '../images/github4.jpg',
        link: 'https://github.com/gregorojstersek/resources-to-become-a-great-engineering-leader'
    },
    {
         id: 5,
        name: 'public-apis',
        image: '../images/github5.jpg',
        link: 'https://github.com/public-apis/public-apis'
    },
];

const container = document.getElementById('github-container');

githubInfor.forEach(item => {
    const box = document.createElement('div');
    box.classList.add('box');

    box.innerHTML = `
        <img src="${item.image}" class="image" alt="${item.name}">
        <p class="title">${item.name}</p>
        <a class="link" href="${item.link}" target="_blank">Check it out</a>
    `;

    container.appendChild(box);
});
