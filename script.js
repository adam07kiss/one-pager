const toggle = () => {
    const navbar = $('#navbar');
    const headerToggle = $('#header-toggle');

    if(navbar.hasClass('show')) {
        navbar.removeClass('show')
        headerToggle.removeClass('bg-white')
    } else {
        navbar.addClass('show')
        headerToggle.addClass('bg-white')
    }
};
