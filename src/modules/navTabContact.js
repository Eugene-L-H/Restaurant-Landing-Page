export const navTabContact = () => {
  let contactSquare = document.createElement('div');
  contactSquare.classList.add('contactSquare');

  let phoneNumber = document.createElement('p');
  phoneNumber.setAttribute('class', 'phoneNumber');
  phoneNumber.textContent = 'Call us at: 1 (234) 567 8910';

  let splitOr = document.createElement('p');
  splitOr.textContent = 'OR'

  let email = document.createElement('p');
  email.textContent = 'Email at: ';
  let emailLink = document.createElement('a');
  emailLink.setAttribute('href', '#');
  emailLink.textContent = 'theeats@cafebistro.com'; 
  email.append(emailLink);

  contactSquare.append(phoneNumber);
  contactSquare.append(splitOr);
  contactSquare.append(email);
  return contactSquare;
}