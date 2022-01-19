export const navTabMenu = () => {
  let menuBorder = document.createElement('div');
  menuBorder.classList.add('menuBorder');

  let menuImage = document.createElement('img');
  menuImage.setAttribute('src', '../images/menuWhite.jpg');
  menuImage.setAttribute('alt', 'Picture of the food menu.');

  menuBorder.append(menuImage);
  return menuBorder;
}

