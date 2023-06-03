/* sideNav */
function openNav() {
    document.getElementById("mySidenav").style.width = "20em";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/*popup images*/
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

/* splash screens */ 
