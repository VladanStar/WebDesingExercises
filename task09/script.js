const mobileMenu = () => {
    console.log("Test");
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    console.log(menu);
    if (btn.innerText === "MENU") {
        console.log("MENU write");
        menu.style.display = 'block';
        btn.innerHTML = "CLOSE"
    }
    else {
        console.log("CLOSE write");
        menu.style.display = 'none';

        btn.innerHTML = "MENU"
    }

   
}