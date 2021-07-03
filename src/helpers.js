const loadContent = (element) => {
  const content = document.getElementById('content');
  content.appendChild(element);
}

const loadTab = (element) => {
  const content = document.getElementById('content');
  const footer = document.querySelector('footer');
  const previousTab = document.querySelector('main');
  if (previousTab) {
    content.removeChild(previousTab);
  }
  content.insertBefore(element, footer);
}

const setCssVars = () => {
  const headerHeight = document.querySelector('#heading-wrapper').offsetHeight;
  const footerHeight = document.querySelector('footer').offsetHeight;
  const offset = headerHeight + footerHeight;
  document.documentElement.style.setProperty('--offset-header', `${headerHeight}px`);
  document.documentElement.style.setProperty('--offset', `${offset}px`);

  // Correct 100vh rendering on mobiles
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export { loadContent, loadTab, setCssVars }