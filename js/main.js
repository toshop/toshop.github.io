
function showMenu() {
    var elem = document.getElementById("main-menu");
    elem.classList.toggle("hide");
};


(function(){

    let parentContainer = document.getElementById('info');


    function buildGalary() {
        parentContainer.innerHTML = galleryService.printResult();  
        console.log(data[1]);
              
    };
    function init() {
        buildGalary();
    }
    init();
})();


