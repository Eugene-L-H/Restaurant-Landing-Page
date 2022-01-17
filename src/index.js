let content = document.querySelector('#content');
console.log(content);

let header = document.createElement('header');

let title = document.createElement('div');
title.setAttribute('id', 'title');
title.innerText = 'Cafe Bistro';

let description = document.createElement('div');
description.classList.add('description');
let descPara = document.createElement('p');
descPara.textContent = `&emsp;` + 'Welcome to Cafe Bistro! Come join us and our friendly staff for some of our delicious locally procured cuisine paired with one our in-house craft beers; or come enjoy a cup of ethically sourced organic coffee and enjoy our relaxed atmosphere. See you soon!'

content.append(header);
header.append(title);
content.append(description);
description.append(descPara);

