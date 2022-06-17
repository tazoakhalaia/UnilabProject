const menu = document.querySelector('#dd');
const openmenu = document.querySelector('#open');
const close = document.querySelector('.close');
const footer = document.querySelector('footer');
const body = document.querySelector('body');

menu.addEventListener('click', ()=>{
    openmenu.style.display = "block";
    body.classList.add('active');
    if(menu){
        footer.style.position = "fixed";
        footer.style.bottom = "0";
        footer.style.zIndex = "11111";
        footer.style.height = "200px";
        footer.style.width = "400px";
    }
   
})

close.addEventListener('click', (e) => {
    openmenu.style.display = "none";
    body.classList.remove('active');
    if(close){
        footer.style.position = "static";
        footer.style.width = "100%";
    }
})


window.addEventListener('resize', ()=>{
    openmenu.style.display = "none";
    footer.style.width = "100%";
    footer.style.position = "static";
})


document.addEventListener('mouseup', (e)=>{
    if(!openmenu.contains(e.target)){
        openmenu.style.display = "none";
        footer.style.bottom = "0";
        footer.style.position = "static";
        footer.style.width = "100%";
        body.classList.remove('active');
    }
})
