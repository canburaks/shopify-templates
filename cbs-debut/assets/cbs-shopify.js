

const CONSTANTS = {
    //_start:function(){console.log("__cbs__",window.Shopify)}(),
    store: window.Shopify.shop,
    store_name: window.Shopify.shop.split(".myshopify.com")[0],
    url: "https://" + window.Shopify.shop
}



const AJAX = {
    fetcher: function(){
        return fetch("https://la-cuisinette.myshopify.com/collections.json")
	        .then(response => response.json())
            .then(data => data)
    },  
    get_all_collections:async function(handle="collections"){
        let response = await fetch(CONSTANTS.url + "/" + handle + ".json")
        //console.log("response",response )
        let data = await response.json()
        return data
    }
}

const CBS = (function(){
    var loaded = false;

    return {
        loaded,
        CONSTANTS,
        AJAX,
    }
})()

window.CBS = CBS





// 6'lı paket için unlimited options'ı düzenle
function disableShopping(){ 
    const buttonAddToCart = document.getElementsByClassName("special-package-add-to-cart")[0]
    const buttonBuyNow = document.getElementsByClassName("shopify-payment-button__button")[0]
    buttonAddToCart.disabled = true;
    buttonAddToCart.title = "Seçiminizi sepetinize ekleyebilmeniz için 6 adet ürün seçmelisiniz"
    buttonBuyNow.disabled = true
 }


function allowShopping(){ 
    const buttonAddToCart = document.getElementsByClassName("special-package-add-to-cart")[0]
    const buttonBuyNow = document.getElementsByClassName("shopify-payment-button__button")[0]
    buttonAddToCart.disabled = false;
    buttonAddToCart.title = "Seçiminizi sepetinize ekleyebilirsiniz"
    buttonBuyNow.disabled = false
 }

const isFactorOfSix = (quantity) => (quantity > 5 && Math.round(quantity % 6) === 0)

function setErrorText(quantity){
    const errorText =  document.getElementById("error_text")
    const allowable = isFactorOfSix(quantity)
    //console.log("error check: ",errorText, quantity, allowable)
    if (errorText){
        if (allowable){
            errorText.innerHTML = ""
        }
        else {
            errorText.innerHTML = "Lütfen 6 ve katları seçimler yapınız (6 adet, 12 adet, 18 adet gibi)"
            errorText.style.color = "red"
        }
    }
}

 function checkShopping(){
    //const optiontotal = document.getElementById("raw_option_total")
    //console.log("ilk ara toplam: ", optiontotal.value)

    window.setTimeout(function(){
        // allow add to cart
        const latetotal = document.getElementById("raw_option_total")
        
        if (latetotal && latetotal.value){
            //console.log("latetotal value: ", latetotal.value)
            const quantity = Math.round(parseInt(latetotal.value) / 18.5)
            //console.log("quantityy: ", quantity, Math.round(quantity % 6))
            const allowable = isFactorOfSix(quantity)
            if (allowable){
                //console.log("allowing")
                allowShopping()
                setErrorText(quantity)
            }
            else {
                disableShopping()
                setErrorText(quantity)
            }
        }
        // else don't let add to cart
        else {
            disableShopping()
            setErrorText(0)
        }
    },1000)
}


(function infiniteOptions(){
    const selects = document.getElementsByTagName("select");

    for (const el of selects) {
        el.addEventListener("change", function(){
            checkShopping()
        })
    }
    checkShopping()
}
)()
