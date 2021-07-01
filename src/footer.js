export const loadFooter = () => {
  const footer = document.createElement('footer');
  footer.textContent = '© 2021 | Website created by Aleafan';

  const content = document.getElementById('content');
  content.appendChild(footer);
}