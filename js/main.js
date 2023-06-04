/* 
splash screens
 */ 
window.onload = () => {
    const splash = document.querySelector('.splash');
    setTimeout(() => {
        splash.classList.remove('active');
    }, 500)
}

/* 
sideNav
 */
function openNav() {
    document.getElementById("mySidenav").style.width = "20em";
}
//not working
/*if (screen.availWidth<=600) {
    console.log('small screen');
    document.querySelectorAll('#mySidenav li').forEach(link =>{
        link.onclick = closeNav();
    })
}
//this did work  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}*/
const closeButton = document.querySelector('#mySidenav .closebtn');
const navLinks = document.querySelectorAll('#mySidenav ul li a');

closeButton.addEventListener('click', () => {
  document.getElementById("mySidenav").style.width = "0";
});
for(let link of navLinks){
  link.addEventListener('click', () => {
    // if screen is small, nav closes on link click
    if (screen.availWidth<=768) {
        document.getElementById("mySidenav").style.width = "0";
    } 
   
  });
}

/*
popup images
*/
document.querySelectorAll('.imageMasonry img').forEach(image => {
    image.onclick = () => {
        //console.log(image.getAttribute('src'));
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
})
document.querySelector('.popup span').onclick = () =>{
    document.querySelector('.popup').style.display = 'none';
}

