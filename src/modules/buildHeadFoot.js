const buildNavMenu = () => {
  // Create navigation menu in header  
  const navMenu = document.createElement('div');
  navMenu.setAttribute('class', 'navMenu');

  // Create tabs for navagation menu
  const homeTab = document.createElement('div');
  homeTab.setAttribute('class', 'tab');
  homeTab.setAttribute('id', 'homeTab');
  homeTab.textContent = 'Home';

  const menuTab = document.createElement('div');
  menuTab.setAttribute('class', 'tab');
  menuTab.setAttribute('id', 'menuTab');
  menuTab.textContent = 'Menu';

  const contactTab = document.createElement('div');
  contactTab.setAttribute('class', 'tab');
  contactTab.setAttribute('id', 'contactTab');
  contactTab.textContent = 'Contact';

  navMenu.append(homeTab);
  navMenu.append(menuTab);
  navMenu.append(contactTab);

  return navMenu;
}

export const buildHeader = () => {
  const header = document.createElement('header');
  let title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.textContent = 'Cafe Bistro';

  content.append(header);
  header.append(title);
  const navMenu = buildNavMenu();
  header.append(navMenu);

  // Change top banner from translucent to solid on scroll
  const changeOpacity = () => {  
      header.setAttribute('style', 'background-color: #000;')
    }

  // Change solid top banner back to translucent when page scroll at top
  document.addEventListener('scroll', () => { changeOpacity() });
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



