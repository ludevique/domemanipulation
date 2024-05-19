// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
    ]},
   ];
/*[
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];*/

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

//3
// Iterate over the entire menuLinks array and for each "link" object:
    menuLinks.forEach((link)=>{
    // Create an <a> element.
    let newLink = document.createElement('a');
    // On the new element, add an href attribute with
    // its value set to the href property of the "link" object.
    newLink.setAttribute('href', link.href)
    // Set the new element's content to the value of the
    // text property of the "link" object.
    newLink.textContent = link.text
    topMenuEl.appendChild(newLink)
})
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

//part3 Creating the submenu bar
  
let subMenuEl = document.getElementById('sub-menu');//select and create a variable to pass the nav id

//set the hight of the submenu bar to 100%
subMenuEl.style.height = '100%';

//set the value background color of the new variable to the value stored in the css
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//adding the flex-around property to the submenu bar
subMenuEl.classList.add('flex-around');

//set the css position property of the new variable to absolute.
document.getElementById('sub-menu').style.position = 'absolute';

//set the css property of top submenu

document.getElementById('sub-menu').style.top = 0;

//part 4 Adding Menu Interaction.

//1 select and cache the <a> elements inside a variable
let topMenuLinks = document.getElementsByTagName('a');
//console.log(topMenuLinks)

for(let i = 0; i < topMenuLinks.length; i++){
    //console.log(topMenuLinks[i]);
    topMenuLinks[i].addEventListener("click",function(e){
        e.preventDefault();
        //console.log(e)
        if(e.target.tagName !== 'A'){
            return
        };
        

        //1 add the active class to the <a> element that was clicked

        //e.target.classList.add("active")

        //console.log(e.target.classList)
        //console.log(e.target.classList.contains('active'))
        //console.log(e.target.classList.remove("active"))

        if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
        }else if(!e.target.classList.contains("active")){
            e.target.classList.add("active");
        }else{
            e.target.classList.remove("active");
        }

        console.log(e.target);

        //question two
    });
    
        
}












