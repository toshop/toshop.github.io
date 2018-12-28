console.log('services');
console.log(data[1]);
// let list = data;

var galleryService = (function(){
    
    function getGalaryData () {

        // let modifyDate = (data) => {

        //     let option = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        //     let date = new Date(data);
        //     return date.toLocaleDateString('en-GB', option);
        // };

        // return data.map((obj) => {
        //     return {
        //         url : modifyUrl(obj.url),
        //         name : modifyName(obj.name),
        //         description : modifyDescription(obj.description),
        //         date : modifyDate(obj.date),
        //         dateSort : obj.date,
        //         id : obj.id,
        //         display : false,
        //     }
        // })

    };

    function printResult () {
        
        let resultString = '';

        data.forEach(function (obj) {
            if (obj.available) {
                resultString +=
                    `<div class="main-card">
                        <div class="picture-box">
                            <a href="img/${obj.id}/addition.jpg">
                                <img src="img/${obj.id}/main.jpg" alt="Фото деталі">       
                            </a>
                        </div>
                        <div class="discription">
                            <p><b>${obj.name}</b></p>
                            <p>Код товару: <b>${obj.id}</b></p>
                            <p>Виробник: <b>${obj.producer}</b></p>
                            <p>Розмір деталі: <b>${obj.dimension}</b></p>
                            <p>Товщина деталі: <b>${obj.thickness} мм.</b></p>
                            <p>Опис: <b>${obj.description}</b></p>
                            <p></p>
                            <p>Ціна: <b>${obj.price}</b></p>
                        </div>
                    </div>`;
            };
        });
        return resultString;
    };

    return {
        getGalaryData : getGalaryData,
        printResult : printResult
    };
}());