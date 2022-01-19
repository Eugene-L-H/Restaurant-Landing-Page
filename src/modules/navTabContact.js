export const navTabContact = () => {
  let contactSquare = document.createElement('div');
  contactSquare.classList.add('contactSquare');

  let phoneNumber = document.createElement('p');
  phoneNumber.setAttribute('class', 'phoneNumber');
  phoneNumber.textContent = 'Call us at: 1 (234) 5678'

  contactSquare.append(phoneNumber);
  return contactSquare;
}