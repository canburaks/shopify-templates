

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
    const collections = AJAX.fetcher();

    console.log("data", collections)

    return {
        loaded,
        collections,
        ...CONSTANTS,
        ...AJAX,
    }
})()

window.CBS = CBS