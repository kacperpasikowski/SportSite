document.addEventListener('DOMContentLoaded', function(){
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle i');

    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleButton.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
        
        if(mobileMenu.classList.contains('active')){
            toggleButton.classList.remove('fa-bars');
            toggleButton.classList.add('fa-times');
        }else{
            toggleButton.classList.remove('fa-times');
            toggleButton.classList.add('fa-bars');
        }
    })
})