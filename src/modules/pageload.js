export const pageLoad = (buildHeader, buildFooter) => {
  let content = document.querySelector('#content');

  buildHeader();

  let pageContent = document.createElement('div');
  pageContent.setAttribute('id', 'pageContent');

  let description = document.createElement('div');
  description.classList.add('description');
  let para = document.createElement('p');
  para.textContent = 'Welcome to Cafe Bistro! Join us and our friendly staff for some of our delicious locally procured cuisine paired with one our in-house craft beers. Enjoy a cup of ethically sourced organic coffee and embrace our relaxed atmosphere. See you soon!'
  description.append(para);

  pageContent.append(description);
  content.append(pageContent);
  buildFooter();
}
