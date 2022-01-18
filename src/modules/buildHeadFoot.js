export const buildHeader = () => {
  const header = document.createElement('header');
  let title = document.createElement('div');
  title.setAttribute('id', 'title');
  title.textContent = 'Cafe Bistro';
  content.append(header);
  header.append(title);
}

export const buildFooter = () => {
  const footer = document.createElement('footer');
  footer.textContent = 'A project developed by Eugene 2022';
  content.append(footer);
}



