var sauceBtn = document.getElementById('sauce-btn'),
    drinkBtn = document.getElementById('drink-btn'),
    sauceList = document.getElementById('sauce-list'),
    drinkList = document.getElementById('drink-list'),
    sauce = document.getElementById('sauce'),
    drink = document.getElementById('drink');

function initListeners() {
    sauce.addEventListener('click', chooseSauce);
    drink.addEventListener('click', chooseDrink);
    sauceBtn.addEventListener('click', showSauceList);
    drinkBtn.addEventListener('click', showDrinkList);

    // parent.addEventListener('click', deleteUnit);
    // filters.addEventListener('change', sortData);
    // btnClose.addEventListener('click', closeModal);
};

// function burgerMenuPage() {
//     console.log('burgerMenuPage - OK');
//     var burgerMenuCardTemplate = '';
//     buildBurgerCard();
//     buildSauceList();
//     buildDrinkList();
// };

function showSauceList() {
    if (drinkList.classList.contains('hide')) {
        sauceList.classList.toggle('hide');
    } else {
      drinkList.classList.toggle('hide');
      sauceList.classList.toggle('hide');
    }
    console.log('showSauceList - OK');
};

function chooseSauce (event) {
    console.log('chooseSauce - ОК');
    let result = event.target.id;
    let sauceName = sauceArray.filter(x => x.id === result);
    sauceBtn.innerText = `${sauceName[0].ukrname}`;
    sauceBtn.classList.add('checked-point');
    sauceList.classList.toggle("hide");
    localStorage.setItem('m-sauce-checked', 'true');
    localStorage.setItem('m-sauce', result);

};
function showDrinkList() {
    if (sauceList.classList.contains('hide')) {
        drinkList.classList.toggle('hide');
    } else {
      sauceList.classList.toggle('hide');
      drinkList.classList.toggle('hide');
    }
    console.log('showDrinkList - OK');
};

function chooseDrink() {
    console.log('chooseDrink - OK');
    let result = event.target.id;
    let drinkName = drinkArray.filter(x => x.id === result);
    drinkBtn.innerText = `${drinkName[0].ukrname}`;
    drinkBtn.classList.add('checked-point');
    drinkList.classList.toggle("hide");
    localStorage.setItem('m-drink-checked', 'true');
    localStorage.setItem('m-drink', result);

};
function isAddPossible() {
    if ( localStorage.getItem('m-drink-checked') && localStorage.getItem('m-drink-checked') )  {

    };
};
function addInBasket() {

    console.log('addInBasket - OK');
};

function init() {
    initListeners();
    // burgerMenuPage()
    // apllyConfig();
    // setFilter();
    // counter(displayConfig.arrayConfig);
    // buildGallery(galleryData);
};

init();

// `
//                 <!-- <div class="button-group">
//                   <button id="sauce-btn" class="btn btn-dev " type="button">Виберіть соус</button>
//                   <button id="drink-btn" class="btn btn-dev " type="button">Виберіть напій</button>
//                 </div>
//
//                 <div id="sauce-list" class="hide">
//                   <div id="sauce" class="point">
//                     <button id="s101" class="btn choose-point" type="button" name="button">Соус "Бaрбекю"</button>
//                     <button id="s102" class="btn choose-point" type="button" name="button">Соус "Цезарь"</button>
//                     <button id="s103" class="btn choose-point" type="button" name="button">Соус "Тар-Тар"</button>
//                     <button id="s104" class="btn choose-point" type="button" name="button">Соус "Гірчичний"</button>
//                     <button id="s105" class="btn choose-point" type="button" name="button">Соус "Грибний"</button>
//                     <button id="s106" class="btn choose-point" type="button" name="button">Соус "Хріновий"</button>
//                     <button id="s107" class="btn choose-point" type="button" name="button">Соус "Шашличний"</button>
//                     <button id="s108" class="btn choose-point" type="button" name="button">Соус "Кетчуп"</button>
//                   </div>
//                 </div>
//
//                 <div id="drink-list" class="hide">
//                   <div id="drink" class="point">
//                     <button id="cd101" class="btn choose-point" type="button" name="button">Coca-Cola</button>
//                     <button id="cd102" class="btn choose-point" type="button" name="button">Pepsi</button>
//                     <button id="cd103" class="btn choose-point" type="button" name="button">Sprite</button>
//                     <button id="cd104" class="btn choose-point" type="button" name="button">Fanta</button>
//                     <button id="cd105" class="btn choose-point" type="button" name="button">Моршинська</button>
//                   </div>
//                 </div> -->
//               <!-- </p> -->
//
//               <!-- <button id class="btn btn-success btn-in-basket" type="button" name="button" onclick="addInBasket()">У кошик</button> -->`
