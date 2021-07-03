export const createHeader = () => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'heading-wrapper');
  header.appendChild(wrapper);

  const h1 = document.createElement('h1');
  h1.textContent = 'Santo Palato';
  wrapper.appendChild(h1);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'nav-toggler');
  wrapper.appendChild(button);

  button.addEventListener('click', toggleNav);

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-bars', 'fa-2x');
  button.appendChild(icon);

  icon.addEventListener('transitionend', toggleIcon);

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const ul = document.createElement('ul');
  nav.appendChild(ul);

  const links = ['home', 'menu', 'contact'];
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('id', link);
    a.textContent = link.toUpperCase();
    li.appendChild(a);
    ul.appendChild(li);
  });

  return header;
}

let navMenuShow = false;

function toggleNav() {
    navMenuShow = !navMenuShow;
    this.querySelector('i').classList.add('scale-btn');
    const nav = document.querySelector('nav');
    nav.classList.toggle('show-nav');
}

function toggleIcon() {
    if (navMenuShow) {
        this.classList.remove('fa-bars');
        this.classList.add('fa-times');
    } else {
        this.classList.remove('fa-times');
        this.classList.add('fa-bars');
    }
    this.classList.remove('scale-btn');
}