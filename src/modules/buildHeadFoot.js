export const navMenu = () => {
  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu');

  const home = document.createElement('a');
}

export const buildHeader = () => {
  const header = document.createElement('header');
  let title = document.createElement('div');
  title.setAttribute('id', 'title');
  title.textContent = 'Cafe Bistro';

  content.append(header);
  header.append(title);

  // Change top banner from translucent to solid on scroll
  const changeOpacity = (scroll) => {
    if (scroll === 0) {
      header.setAttribute('style', '  background-color: rgb(0, 0, 0, 0.75);')
    } else {     
      header.setAttribute('style', 'background-color: #000;')
    }
  }

  // Change solid top banner back to translucent when page scroll at top
  const scollPosition = document.querySelector('#scrollable');
  console.log(scollPosition);
  document.addEventListener('scroll', () => { changeOpacity(scollPosition) });
}

export const buildFooter = () => {
  const footer = document.createElement('footer');
  
  // Give credit to photographer and link to their site
  const credit = document.createElement('p');
  credit.textContent = 'Photography by Patrick Tomasso: ';
  const patrickWebSite = document.createElement('a');
  patrickWebSite.setAttribute('href', 'https://www.patricktomasso.com');
  patrickWebSite.setAttribute('target', '_blank');
  patrickWebSite.textContent = 'www.patricktomasso.com';

  const signature = document.createElement('p');
  signature.textContent = 'A project developed by Eugene 2022';
  
  footer.append(credit);
  credit.append(patrickWebSite);
  footer.append(signature);
  content.append(footer);
  
}



