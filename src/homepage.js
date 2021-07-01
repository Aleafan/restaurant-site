export const loadHomepage = () => {
  const main = document.createElement('main');
  
  const image = document.createElement('div');
  image.classList.add('background');
  main.appendChild(image);

  const vhWrapper = document.createElement('div');
  vhWrapper.setAttribute('id', 'vh-wrapper');
  
  const h2 = document.createElement('h2');
  h2.textContent = 'TRATTORIA ITALIANA';
  vhWrapper.appendChild(h2);

  const p1 = document.createElement('p');
  p1.textContent = 'Delicious Italian food served since 1865';
  vhWrapper.appendChild(p1);

  const figure = document.createElement('figure');
  vhWrapper.appendChild(figure);

  const blockquote = document.createElement('blockquote');
  blockquote.setAttribute('cite', 'https://www.comde-mast.com');
  figure.appendChild(blockquote);

  const p2 = document.createElement('p');
  p2.textContent = 'Located at the heart of the buzzing San Lorenzo market area, Trattoria Santo Palato does top-notch renditions of Florentine and Tuscan classics at affordable prices.';
  blockquote.appendChild(p2);

  const figcaption = document.createElement('figcaption');
  figure.appendChild(figcaption);

  const cite = document.createElement('cite');
  cite.textContent = '—Comde Nast Traveller';
  figcaption.appendChild(cite);

  main.appendChild(vhWrapper);
  
  const content = document.getElementById('content');
  content.appendChild(main);
}