const mobileMenu = () => {
    console.log("Test");
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    console.log(menu);
    menu.style.display = 'block';
    btn.innerHTML="CLOSE"
}