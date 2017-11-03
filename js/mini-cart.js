var miniCart = (function () {
    "use strict";
    var count =0,
        cart;

    pubsub.sub('add-to-cart',function (item) {
        count++;
        cart.text(count);
    });

    pubsub.sub('remove-from-cart',function (item) {
        count--;
        cart.text(count);
    });
    return {
        init : function () {
            cart= $('.mini-cart');
        }
    }
}());
