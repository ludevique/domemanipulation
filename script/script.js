 let mainEl = document.getElementsByTagName('main')
console.log(mainEl)
mainEl[0].style.backgroundColor = 'var(--main-bg)'
mainEl[0].innerHTML = '<h1>DOM Manipulation</h1>'
mainEl[0].classList.add('flex-ctr')

//part 2 creating a menu bar.
//select and cache the element in a variable

let topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl)
//set the height
topMenuEl.style.height = '100%'

//set the background color
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//add a class of flex-around to **to

topMenuEl.classList.add('flex-around'); 

