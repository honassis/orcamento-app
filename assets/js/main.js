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
        Id: 1,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 1,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 1,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 1,
        Title: "TesteJson",
        Image: "logo.png",
        Value: "R$ 2,20",
        Message: "MSG",
        Color: "red",
    },
    {
        Id: 1,
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
                        <input class="qtd" type="number" name="qtd" id="qtd">
                        <a class="btn btn-compra" href=""> Adicionar no orçamento </a>
                    </div>
                </div>
            </div> `;
            return product;
}

function MainProducts(){
    var max_in_line = 5;
    var temp = 0;
    var openDiv = `<div class="favoritos-produtos">oi`;
    var closeDiv = "</div>"
    var html = openDiv; 
    var qnt = 6;
    for(var i=0; i<qnt; i++){
      
        temp++;
        html+=loadItem(0,"TESTE JAVASCRIPT", "logo.png", "R$ 2.0","Testemsg");
        if(temp==max_in_line){
            html+=closeDiv;
            if(!((i+1)==qnt)){
                html+=openDiv;
            }
            temp=0;
        }
        console.log(temp);
        if(((i+1)==qnt)){
            html+=closeDiv;
        }
    }
    document.getElementById("main-products").innerHTML += html;
}

MainProducts();