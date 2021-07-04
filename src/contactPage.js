const address = {
  name: 'ADDRESS',
  paragraphs: [
      'Paseo de Gracia 7',
      '09453 Florence'
  ]
};
const contact = {
  name: 'CONTACT',
  paragraphs: [
    'ciao@santo-palato.it',
    'Tel. +12 34 567 89 01'
  ],
  button: {
    id: 'reservation',
    type: 'button',
    textContent: 'RESERVATIONS',
  }
};
const hours = {
  name: 'OPENING HOURS',
  paragraphs: [
    'Monday: Closed',
    'Tuesday: Closed',
    'Wednesday: 20:00-00:00',
    'Thursday: 20:00-00:00',
    'Friday: 13:00-17:00 + 20:00-00:00',
    'Saturday: 13:00-17:00 + 20:00-00:00',
    'Sunday: 13:00-17:00 + 19:00-23:00'
  ]
};

export const createContactTab = () => {
  const main = document.createElement('main');
  main.classList.add('background');

  const div = document.createElement('div');
  div.setAttribute('id', 'contact');
  main.appendChild(div);

  const h2 = document.createElement('h2');
  h2.textContent = 'CONTACT US:';
  div.appendChild(h2);

  const section = document.createElement('section');
  section.classList.add('flex-container');
  div.appendChild(section);

  const contacts = [address, contact, hours];
  contacts.forEach(contact => {
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = contact.name;
    article.appendChild(h3);

    contact.paragraphs.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      article.appendChild(p);
    });

    if (contact.button) {
      const button = document.createElement('button');
      button.setAttribute('id', contact.button.id);
      button.setAttribute('type', contact.button.type);
      button.textContent = contact.button.textContent;
      article.appendChild(button);
    }

    section.appendChild(article);
  });

  return main;
}