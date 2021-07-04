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
  icon.classList.add('fas', 'fa-bars', 'fa-2x', 'toggler');
  button.appendChild(icon);

  icon.addEventListener('transitionend', toggleIcon);

  const linksWrapper = document.createElement('div');
  linksWrapper.setAttribute('id', 'links-wrapper');
  header.appendChild(linksWrapper);

  const nav = document.createElement('nav');
  linksWrapper.appendChild(nav);

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

    a.addEventListener('click', toggleNav);
  });

  const socialLinks = document.createElement('ul');
  socialLinks.setAttribute('id', 'social-links');
  linksWrapper.appendChild(socialLinks);

  const icons = [['fab', 'fa-facebook', 'fa-lg'], ['fab', 'fa-instagram-square', 'fa-lg'], ['fab', 'fa-twitter-square', 'fa-lg']];
  icons.forEach(icon => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    li.appendChild(a);
    const i = document.createElement('i');
    icon.forEach(className => i.classList.add(className));
    a.appendChild(i);

    socialLinks.appendChild(li);
  })

  return header;
}

let navMenuShow = false;

function toggleNav() {
    navMenuShow = !navMenuShow;
    document.querySelector('.toggler').classList.add('scale-btn');
    const linksWrapper = document.getElementById('links-wrapper');
    linksWrapper.classList.toggle('show-nav');
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