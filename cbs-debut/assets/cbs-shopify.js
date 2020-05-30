

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


// -----------------------
// -----------Ozel paket için unlimited options'ı düzenle ------------


/* uncomment when paste below in infinite options panel
infiniteOptions()
*/
// -----------------------
// -----------------------

const cbs = (function(){
    var loaded = false;
          
    return {
        loaded,
        CONSTANTS,
        isUrlIncludes:function(term){
            return window.location.pathname.includes(term)
        },
        removeEnglishProducts:function(){
            const productBox = document.querySelector("#shopify-section-1586294678188")
            if (productBox){
                productBox.className = productBox.className + " hidden-none"
            }
        },
        removeTurkishProductsEN:function(){
            const productBox1 = document.getElementById("shopify-section-1586298827232")
            const productBox2 = document.getElementById("shopify-section-1585435320173")
            const productBox3 = document.getElementById("shopify-section-1585435444550")
            const blogBox4 = document.getElementById("shopify-section-1587004626079")
            const onlineShopBox = document.getElementById("shopify-section-hero-1")

            if (productBox1 && productBox2 && productBox3){
                productBox1.className = productBox1.className + " hidden-none"
                productBox2.className = productBox2.className + " hidden-none"
                productBox3.className = productBox3.className + " hidden-none"
                blogBox4.className = blogBox4.className + " hidden-none"
                onlineShopBox.className = onlineShopBox.className + " hidden-none"
            }

        },
        removeTurkishProductsDE:function(){
            //const productBox1 = document.getElementById("shopify-section-1586298827232")
            //const productBox2 = document.getElementById("shopify-section-1585435320173")
            //const productBox3 = document.getElementById("shopify-section-1585435444550")
            const blogBox4 = document.getElementById("shopify-section-1587004626079")
            const onlineShopBox = document.getElementById("shopify-section-hero-1")

            if (blogBox4 && onlineShopBox){
                //productBox1.className = productBox1.className + " hidden-none"
                //productBox2.className = productBox2.className + " hidden-none"
                //productBox3.className = productBox3.className + " hidden-none"
                blogBox4.className = blogBox4.className + " hidden-none"
                onlineShopBox.className = onlineShopBox.className + " hidden-none"
            };
            const prices = document.getElementsByClassName("product__price")
            if(prices && prices.length > 0){ prices[0].className += " hidden-none" }
			
          
          	const forms = document.getElementsByTagName("form")
            const form = document.getElementsByClassName("product-form")
            if (form && form.length > 0) { form[0].className += " hidden-none"}
          	console.log(form)

        },
        // özel paket fiyatı sıfır olduğundan gözüktüğü yerden kaldırır
        zeroPriceRemover: function(){
            var priceItems = document.querySelectorAll("span.price-item.price-item--regular")
            //console.log("priceItems", priceItems)
            if (priceItems[0] && priceItems[0].innerHTML != "111,00TL"){
              //priceItems[0].innerHTML = ""
            }
        },
        //koleksiyon sayfasında indirimli fiyatın altında yazan "satıs" etiketini kaldırır
        satisEtiketiRemover:function (){
            var urunlerdekiSatisEtiketi = document.getElementsByClassName("price__badges price__badges--listing")
            if (urunlerdekiSatisEtiketi && urunlerdekiSatisEtiketi.length > 0){
                for (const etiket of urunlerdekiSatisEtiketi) {
                    etiket.style.display = "none"
                }
            }
        },
        infiniteOptionsScript:function (){
            function allowShopping(){ 
                const buttonAddToCart = document.getElementsByClassName("special-package-add-to-cart")[0]
                buttonAddToCart.disabled = false;
                buttonAddToCart.title = "Seçiminizi sepetinize ekleyebilirsiniz"
                const errorText =  document.getElementById("error_text")
                errorText.innerHTML = ""
             }
            
            function disableShopping(minOrder){ 
                const buttonAddToCart = document.getElementsByClassName("special-package-add-to-cart")[0]
                buttonAddToCart.disabled = true;
                buttonAddToCart.title = `Seçiminizi sepetinize ekleyebilmeniz için ${minOrder} adet ürün seçmelisiniz`
                const errorText =  document.getElementById("error_text")
                errorText.innerHTML = `Lütfen ${minOrder} ve katları seçimler yapınız (${minOrder} adet, ${minOrder*2} adet, ${minOrder*3} adet gibi)`
                errorText.style.color = "red"
            }
            
            function multipleOptionsPanelChecker(unitPrice, minOrderQuantity){

                const isFactorOfMinimumOrder = (quantity, minOrder) => (quantity > (minOrder - 1) && Math.round(quantity % minOrder) === 0)
            
                window.setTimeout(function(){
                    // read current status
                    const latetotal = document.getElementById("raw_option_total")
                    if (latetotal && latetotal.value){
                        //calculate selected quantity from value
                        const currentQuantity = Math.round(parseInt(latetotal.value) / unitPrice)
            
                        //check if selection is factor of minOrderQuantity
                        const allowable = isFactorOfMinimumOrder(currentQuantity, minOrderQuantity)
                        if (allowable){
                            //console.log("allowing")
                            allowShopping()
                        }
                        else {
                            disableShopping(minOrderQuantity)
                        }
                    }
                    // else don't let add to cart
                    else {
                        disableShopping(minOrderQuantity)
                    }
                },1000)
            }
            
            
            function infiniteOptions(){
                const unitPrice = 19.9;
                const minOrderQuantity = 3;
                const priceText = `Min: ${Math.round(unitPrice*minOrderQuantity * 10)/10}TL (${minOrderQuantity} Adet X ${unitPrice}TL)`
                const cargoText = "--Ücretsiz Kargo--"

                const isSpecialPackagePage = window.location.pathname.includes("ozel-sepet")
                //console.log("ozel sepet sayfası mı?", isSpecialPackagePage)
                
                // ozel sepet sayfası mı kontrol et
                if (isSpecialPackagePage){

                    //Fiyat hakkında bilgi vermek için: "Min:55,5TL (3 adet x 18,50 TL)" gibi
                    const priceInformationLabel = document.getElementsByClassName("product__policies rte")[0]
                    if (priceInformationLabel){
                        const pagePriceLabel = document.getElementsByClassName("price-item price-item--regular")[0]
                        // sayfa fiyatına fiyat yaz, altına da kargo bilgisi
                        if(pagePriceLabel){
                            pagePriceLabel.innerHTML = priceText
                            priceInformationLabel.innerHTML = cargoText
                        // eğer bulunamazsa fiyat altına fiyat yaz
                        }
                        else {
                            priceInformationLabel.innerHTML = priceText
                        }
                    }


                    //Inputlardaki değişimi dinle, değişim varsa tekrardan kontrol et
                    const selects = document.getElementsByTagName("select");
                    for (const el of selects) {
                        el.addEventListener("change", function(){
                            multipleOptionsPanelChecker(unitPrice, minOrderQuantity)
                        })
                    }
                    multipleOptionsPanelChecker(unitPrice, minOrderQuantity)
                }
            }
            infiniteOptions()
        }
    }
})()

window.CBS = cbs



/*
function allowShopping(){ 
    const buttonAddToCart = document.getElementsByClassName("special-package-add-to-cart")[0]
    const buttonBuyNow = document.getElementsByClassName("shopify-payment-button__button")[0]
    buttonAddToCart.disabled = false;
    buttonAddToCart.title = "Seçiminizi sepetinize ekleyebilirsiniz"
    buttonBuyNow.disabled = false
    const errorText =  document.getElementById("error_text")
    errorText.innerHTML = ""
 }

function disableShopping(minOrder){ 
    const buttonAddToCart = document.getElementsByClassName("special-package-add-to-cart")[0]
    const buttonBuyNow = document.getElementsByClassName("shopify-payment-button__button")[0]
    buttonAddToCart.disabled = true;
    buttonAddToCart.title = `Seçiminizi sepetinize ekleyebilmeniz için ${minOrder} adet ürün seçmelisiniz`
    buttonBuyNow.disabled = true
    const errorText =  document.getElementById("error_text")
    errorText.innerHTML = `Lütfen ${minOrder} ve katları seçimler yapınız (${minOrder} adet, ${minOrder*2} adet, ${minOrder*3} adet gibi)`
    errorText.style.color = "red"
}


function multipleOptionsPanelChecker(){
    var unitPrice = 18.5;
    var minOrderQuantity = 3;
    const isFactorOfMinimumOrder = (quantity, minOrder) => (quantity > (minOrder - 1) && Math.round(quantity % minOrder) === 0)

    window.setTimeout(function(){
        // read current status
        const latetotal = document.getElementById("raw_option_total")
        if (latetotal && latetotal.value){
            //calculate selected quantity from value
            const currentQuantity = Math.round(parseInt(latetotal.value) / unitPrice)

            //check if selection is factor of minOrderQuantity
            const allowable = isFactorOfMinimumOrder(currentQuantity, minOrderQuantity)
            if (allowable){
                //console.log("allowing")
                allowShopping()
            }
            else {
                disableShopping(minOrderQuantity)
            }
        }
        // else don't let add to cart
        else {
            disableShopping(minOrderQuantity)
        }
    },1000)
}


function infiniteOptions(){
    const isSpecialPackagePage = window.location.pathname.includes("ozel-sepet")
    console.log("ozel sepet sayfası mı?", isSpecialPackagePage)

        // ozel sepet sayfası mı kontrol et
        if (isSpecialPackagePage){

            const selects = document.getElementsByTagName("select");
            for (const el of selects) {
                el.addEventListener("change", function(){
                    multipleOptionsPanelChecker()
                })
            }
            multipleOptionsPanelChecker()
        }
}
infiniteOptions()




*/