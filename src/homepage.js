function loadHomepage() {
    const header = document.createElement('header');
    header.classList.add('background');
    header.innerHTML = '<h1>trattoria Toscana</h1>';
    const main = document.createElement('main');
    main.innerHTML = `
        <figure>
          <blockquote cite="https://www.conde-mast.com">
            <p>Located at the heart of the buzzing Sant'Lorenzo market area, Trattoria Toscana does top-notch renditions of Florentine and Tuscan classics at affordable prices.</p>
          </blockquote>
          <figcaption><cite>—Conde Mast Traveller</cite></figcaption>
        </figure>`;
    const content = document.getElementById('content');
    content.appendChild(header);
    content.appendChild(main);
}

export default loadHomepage;