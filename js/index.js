
// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/
var theToggle = document.getElementById('toggle');
// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}




// Position fixed

window.onscroll = function() {myFunction()};

function myFunction() {
  const menu = document.querySelector(".menu")
  
  if (document.body.scrollTop >0|| document.documentElement.scrollTop > 0) {
    menu.classList.add('fixed')
  }
  else{
    menu.classList.remove('fixed')
    
  }
  
}
 

const navA = $(".lien");
const logo = $(".logo");

// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.
let banniere = $('.banniere').position();
let societe = $('.societe').position();
let services = $('.service').position();
let realisations = $('.realisation').position();
let contact = $('.contacter').position();

function onWindowScroll(event) {
  
	if (window.pageYOffset < 1) {
  	navA.removeClass('colorWhite');
    logo.removeClass('logoBlanc');
  }
  if(window.pageYOffset > banniere.top){
  	navA.addClass('colorWhite');
    logo.addClass('logoBlanc');
  }
  if(window.pageYOffset > societe.top){
    navA.removeClass('colorWhite');
    logo.removeClass('logoBlanc');
  }
  if(window.pageYOffset > services.top){
    navA.addClass('colorWhite')
    logo.addClass('logoBlanc');
  }
  if(window.pageYOffset > realisations.top){
    navA.removeClass('colorWhite');
    logo.removeClass('logoBlanc');
  }
  if(window.pageYOffset > contact.top){
    navA.addClass('colorWhite');
    logo.addClass('logoBlanc');
  }

}
window.addEventListener('scroll', onWindowScroll);


// s'il scroll masque le menu lien
function onScroll() {
  if("scroll" && $('.lien').css('display') === 'block' ){
    $('#toggle').removeClass('on')
    
  }
}
window.addEventListener('scroll', onScroll);
