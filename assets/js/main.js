(function(){
    
    var navbar = $('#sidenav');
    
    // Hubuger menu click
    $('.navbar-btn').click(function(){
        toggleNavbar();
    });
    
    // close btn click
    $('.closebtn').click(function(){
        toggleNavbar();
    });
    
    // open close side navbar
    function toggleNavbar(){
        if(navbar.width() == 0) return navbar.width('250px');
        return navbar.width('0px');
    }
    
}());