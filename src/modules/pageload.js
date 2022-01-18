export const pageLoad = (buildHeader, buildFooter) => {
  let content = document.querySelector('#content');

  buildHeader();

  let description = document.createElement('div');
  description.classList.add('description');
  let para = document.createElement('p');
  para.textContent = 'Welcome to Cafe Bistro! Come join us and our friendly staff for some of our delicious locally procured cuisine paired with one our in-house craft beers; or come enjoy a cup of ethically sourced organic coffee and enjoy our relaxed atmosphere. See you soon!'

  content.append(description);
  description.append(para);
  buildFooter();
}
