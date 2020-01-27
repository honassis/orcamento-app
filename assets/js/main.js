var Json = [
    {
        Id: 1,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "245542",
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
    Price = numberToReal(parseFloat(Value));
    var product=`
                <div class="produtos-card">
                <div class="produtos-central">
                <div class="produto-img">
                    <img src="./assets/img/${Image}" alt="">
                </div>
                </div>
                <div class="produtos-content">
                    <div class="produto-info">
                        <p class="produto-name">${Title}</p>
                        <div class="info-prices">
                            <span class="produto-price">${Price}</span><span class="widget promotion">${Message}</span>
                        </div>
                    </div>
                    <div class="product-footer">
                        <div class="qtd" id="qtd_${Id}"></div>
                        <div class="btn btn-rmv" onclick="ProductAction('Subtract',${Id})" >-1</div>
                         
                        <div class="btn btn-add" onclick="ProductAction('Add',${Id})">+1</div>
                    </div>
                </div>
            </div> `;
            return product;
}
function loadSelectedItem(Id,Title,Image,Value,Qnt){
    
    var TotalP = Value*Qnt;
    Price = numberToReal(parseFloat(TotalP));
var product = `
<div class="car-item">
    <div class="car-img">
        <img src="assets/img/${Image}" alt="">
    </div>
    <div class="car-item-content">

        <p>${Title}</p>

        <div class="car-item-footer">
            <div>
                <button class="car-btn minus-btn" onclick="ProductAction('Subtract',${Id})">-1</button>
                <button class="car-btn ">${Qnt}</button>
                <button class="car-btn more-btn" onclick="ProductAction('Add',${Id})">+1</button>
            </div>
            <div class="car-item-money">
                ${Price}
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
var total = 0;

    for(var i =0; i < ShoppingCart.length;i++){
        Product = FindPItem(ShoppingCart[i].Id);
        document.getElementById("qtd_"+ShoppingCart[i].Id).innerHTML = ShoppingCart[i].Qnt;
     html+=loadSelectedItem(Product.Id, Product.Title, Product.Image, Product.Value,ShoppingCart[i].Qnt);
     total += (parseFloat(Product.Value)*ShoppingCart[i].Qnt)
    }
    document.getElementById("car-container").innerHTML = html;
    document.getElementById("total_orcamento").innerHTML = numberToReal(total);

}
function AuxFind(Json) { 
    return Json.Id === AuxItemAdd;
}
function FindPItem(Key){
    AuxItemAdd = Key;
    return Json.find(AuxFind);
}

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
                        document.getElementById("qtd_"+Id).innerHTML = "";
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
function numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}