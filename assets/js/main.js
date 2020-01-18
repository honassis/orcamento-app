var Json = [
    {
        Id: 1,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 2,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 3,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 4,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSGI",
        Color: "red",
    },
    {
        Id: 5,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 6,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },

]



function loadItem(Id,Title,Image,Value,Message){
    var product=`
                <div class="produtos-card">
                <div class="produto-img">
                    <img src="./assets/img/${Image}" alt="">
                </div>
                <div class="produtos-content">
                    <div class="produto-info">
                        <p class="produto-name">${Title}</p>
                        <div class="info-prices">
                            <span class="produto-price">${Value}</span><span class="widget promotion">${Message}</span>
                        </div>
                    </div>
                    <div class="product-footer">
                        <input class="qtd" type="number" name="qtd" id="qtd_${Id}">
                        <div class="btn btn-rmv" onclick="Add" >-1</div>
                         
                        <div class="btn btn-add" href="#">+1</div>
                    </div>
                </div>
            </div> `;
            return product;
}
function loadSelectedItem(Id,Title,Image,Value,Message){
var product = `
<div class="car-item">
    <div class="car-img">
        <img src="assets/img/${Image}" alt="">
    </div>
    <div class="car-item-content">

        <p>${Title}</p>

        <div class="car-item-footer">
            <div>
                <button class="car-btn minus-btn">-1</button>
                <button class="car-btn ">99</button>
                <button class="car-btn more-btn">+1</button>
            </div>
            <div class="car-item-money">
                ${Value}
            </div>
        </div>
    </div>
<i class="far fa-trash-alt car-item-remove"></i>
</div>`;
 return product;
}

function MainProducts(){
    var max_in_line = 5;
    var temp = 0;
    var openDiv = `<div class="favoritos-produtos">`;
    var closeDiv = "</div>"
    var html = openDiv; 
    for(var i=0; i<Json.length; i++){
      
        temp++;
        html+=loadItem(Json[i].Id,Json[i].Title, Json[i].Image, Json[i].Value,Json[i].Message);
        if(temp==max_in_line){
            html+=closeDiv;
            if(!((i+1)==Json.length)){
                html+=openDiv;
            }
            temp=0;
        }
        console.log(temp);
        if(((i+1)==Json.length)){
            html+=closeDiv;
        }
    }
    document.getElementById("main-products").innerHTML += html;
}

MainProducts();

function CarMarket(action){
    switch(action){
        case "Open":
            document.getElementById('car-nav').style.display='block';
        break;

        case "Close":
            document.getElementById('car-nav').style.display='none';
        break;
    }
}
function je(){
var htmll= loadSelectedItem(0,"TESTE JAVASCRIPT", "logo.png", "R$ 2.0","Testemsg");
document.getElementById("car-container").innerHTML += htmll;
}
je();
je();
je();