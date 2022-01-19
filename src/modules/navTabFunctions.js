export const navTabHome = () => {
  let description = document.createElement('div');
  description.classList.add('description');

  let para = document.createElement('p');
  para.textContent = 'Welcome to Cafe Bistro! Join us and our friendly staff for some of our delicious locally procured cuisine paired with one of our in-house craft beers. Enjoy a cup of ethically sourced organic coffee and embrace our relaxed atmosphere. See you soon!'

  description.append(para);
  return description;
}

export const navTabMenu = () => {
  let menuBorder = document.createElement('div');
  menuBorder.classList.add('menuBorder');

  return menuBorder;
}

export const navTabContact = () => {
  let contactSquare = document.createElement('div');
  contactSquare.classList.add('contactSquare');

  let phoneNumber = document.createElement('p');
  phoneNumber.setAttribute('class', 'phoneNumber');
  phoneNumber.textContent = 'Call us at: 1 (234) 5678'

  contactSquare.append(phoneNumber);
  return contactSquare;
}
