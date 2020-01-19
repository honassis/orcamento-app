var Json = [
    {
        Id: 1,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "2.42",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 2,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "6.12",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 3,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "5.52",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 4,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "2.42",
        Message: "MSGI",
        Color: "red",
    },
    {
        Id: 5,
        Title: "TesteJsonLLLL",
        Image: "logo.png",
        Value: "2.42",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 6,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "2.42",
        Message: "MSG",
        Color: "red",
    },

];
//var to aux in search on json
var AuxItemAdd = null;



function loadItem(Id,Title,Image,Value,Message){
    var product=`
                <div class="produtos-card">
                <div class="produto-img">
                    <img src="./assets/img/${Image}" alt="">
                </div>
                <div class="produtos-content">
                    <div class="produto-info">
                        <p class="produto-name">${Id}-${Title}</p>
                        <div class="info-prices">
                            <span class="produto-price">${Value}</span><span class="widget promotion">${Message}</span>
                        </div>
                    </div>
                    <div class="product-footer">
                        <input class="qtd" type="number" name="qtd" id="qtd_${Id}">
                        <div class="btn btn-rmv" onclick="ProductAction('Subtract',${Id})" >-1</div>
                         
                        <div class="btn btn-add" onclick="ProductAction('Add',${Id})">+1</div>
                    </div>
                </div>
            </div> `;
            return product;
}
function loadSelectedItem(Id,Title,Image,Value,Qnt){
    var TotalP = Value*Qnt;
    TotalP = TotalP.toFixed(2);
var product = `
<div class="car-item">
    <div class="car-img">
        <img src="assets/img/${Image}" alt="">
    </div>
    <div class="car-item-content">

        <p>${Id} - ${Title}</p>

        <div class="car-item-footer">
            <div>
                <button class="car-btn minus-btn" onclick="ProductAction('Subtract',${Id})">-1</button>
                <button class="car-btn ">${Qnt}</button>
                <button class="car-btn more-btn" onclick="ProductAction('Add',${Id})">+1</button>
            </div>
            <div class="car-item-money">
                ${TotalP}
            </div>
        </div>
    </div>
<i class="far fa-trash-alt car-item-remove" onclick="ProductAction('Remove',${Id})"></i>
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
function UpdateCart(){
    document.getElementById("car-container").innerHTML = "";
var ShoppingCart = localStorage.getItem("Shop");
var ShoppingCart =  JSON.parse(ShoppingCart);
var html = "";

    for(var i =0; i < ShoppingCart.length;i++){
        Product = FindPItem(ShoppingCart[i].Id);
    
     html+=loadSelectedItem(Product.Id, Product.Title, Product.Image, Product.Value,ShoppingCart[i].Qnt);
    }
    document.getElementById("car-container").innerHTML = html;


}
function AuxFind(Json) { 
    return Json.Id === AuxItemAdd;
}
function FindPItem(Key){
    AuxItemAdd = Key;
    return Json.find(AuxFind);
}
var Test = [{
    Id: 1,
    Qnt: 12,
},
{
    Id: 2,
    Qnt:11,
},
{
    Id: 3,
    Qnt: 10,
}];
//localStorage.setItem("Shop", (JSON.stringify(Test)));
console.log(localStorage.getItem("Shop"));
UpdateCart();
function ProductAction(Action, Id){
    var ShoppingCart = localStorage.getItem("Shop");
    var ShoppingCart =  JSON.parse(ShoppingCart);
    Exists = false; // case no exists
    for(var i=0;i < ShoppingCart.length;i++){
        if(ShoppingCart[i].Id==Id){
            switch(Action){
                case "Add":
                    ShoppingCart[i].Qnt++;
                    Exists = true; 
                break;
                case "Subtract":
                    ShoppingCart[i].Qnt--; 
                    if(ShoppingCart[i].Qnt<=0){
                        ShoppingCart.splice(i,1);
                    }
                break;
                case "Remove":
                    ShoppingCart.splice(i,1);
                    break;
            }
        }

    }
    if(Action=="Add"&&Exists==false){
        ShoppingCart.push({
            Id: Id,
            Qnt: 0,
        });
        localStorage.setItem("Shop", JSON.stringify(ShoppingCart));
        ProductAction("Add",Id);
    }else{
        localStorage.setItem("Shop", JSON.stringify(ShoppingCart));
        UpdateCart();
    }
}