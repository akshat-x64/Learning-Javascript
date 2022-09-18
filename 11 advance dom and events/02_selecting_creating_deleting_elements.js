'use strict';
('use strict');
// for selecting whole page starting of <html>  to </html>
console.log(document.documentElement);
//for selecting the elemet by body
console.log(document.body);
//for selecting only head
console.log(document.head);

// for selecting the elements
const header = document.querySelector('.header');
const allSelections = document.querySelectorAll('section');
console.log(allSelections);
// selection of id
document.getElementById('section--1');
//this methods returns collection of buttons
//also node list
//if doms changes this also changes with return of time
//this gives collections of all buttons
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
//selecting class name
console.log(document.getElementsByClassName('btn'));

//creating and inserting element
const message = document.createElement('div');
//div here meaning which type of element your want to add
message.classList.add('cookia-meaage');
//add class name to div tag
// message.textContent = '';
message.innerHTML =
  'we used cookies for improved functionality and analytics ,<button class ="btn btn--close-cookie">got it </button>';
//this can only be at one place
//dom element is unique
// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
/*.innerHTML and .insertAdjacentHTML do slightly different things.

  .innerHTML will completely replace all the HTML inside of the element with whatever we assign it.
  
  .insertAdjacentHTML will add whatever we assign to it at a certain point in the element, determined by the position parameter.
  
  The reason we're using .innerHTML here is that we just created the element, and we want to define exactly what HTML it should contain. We don't have to worry about overwriting anything.
  
  That being said, we could've just as well used .insertAdjacentHTML here, since we know the newly created element should be empty.
  
  In summary, you want to use .insertAdjacentHTML when you want to add to existing HTML in an element. We use .innerHTML if we want to start from scratch with our own HTML. 
  */
