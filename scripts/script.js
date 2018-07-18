var basket = {

    init: function(){
    this.cacheDom();
    this.addToCart();
    },

    cacheDom: function(){
    this.$summary = $(".basket");
    this.$buttonAdd = $(".add");
    this.$product = this.$buttonAdd.parent();
    this.$price = this.$product.find(".price");
    },
    
    
    addToCart: function(){
    var summary= this.$summary.text().replace(/[^0-9]/g,'');
    var items = summary;
    summary = summary.substring(0, summary.length - 1);
    summary = parseInt(summary);
    summary = summary / 100;

    var items = items.substring(items.length - 1, items.length );
        
    this.$product.on("click", ".add", function(event){
        
    var price = $(event.delegateTarget).find(".price").text();
    price = price.replace(/[^0-9]/g,'');
    price = parseInt(price);
    price = price / 100;
        
    summary = price + summary;
    summary = Math.round(summary * 100) / 100;
     
    items = parseInt(items);
        
    items += 1;
        
    basket.updateCart(summary, items);  
    });         
    },
    
    updateCart: function(summary, items){
    summary = summary.toFixed(2);
    summary = summary.replace(".",",");
    var text = '<i class="zmdi zmdi-shopping-cart"></i>'+summary+" zł/prod. ("+items+")";
    this.$summary.text("");
    this.$summary.append(text);
}
}

basket.init();

var droplist = {
     init: function(){
    this.cacheDom();
    this.bindEvents();
    },

    cacheDom: function(){
    this.$menu = $(".menu-navbar");
    this.$trigger = $(".hamburger");


    },
    
    bindEvents: function(){
        this.$trigger.on('click', this.drop.bind(this));
    },
    drop: function(){
        this.$menu.toggle();
    }
}
droplist.init();
















