var header = document.getElementById('header');
var navs = document.getElementById('navs');
var logostaspi = document.getElementById('logo-staspi');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
var headerWidth = header.clientWidth;
var width = screen.width==headerWidth;
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if(width < 829 ) {
        if(isClose) {
        header.style.height = 'auto';
        navs.style.display = 'inline';
        logostaspi.style.display = 'none';
    } else {
        header.style.height = null;
        navs.style.display = 'none';
        logostaspi.style.display = 'inline';
    }
    // resetCss();
    // return;
    }
}
// resetCss = () => {
//     if (width > 829){
//         console.log("width > 829");
//         navs.removeAttribute('style');
//     }
//     else{
//         console.log("width < 829");
//     }
// }
// resetCss();