var bigCart = (function () {
    "use strict";
     var count =0,
         cart;

    pubsub.sub('add-to-cart',function (item) {
        count++;
        cart.prev().text(count);
        var $li = $('<li>').html(item.name).data('key',item.id);
        cart.append($li);
    });

    pubsub.sub('remove-from-cart',function (item) {
        count--;
        cart.prev().text(count);
        cart.find('li').filter(function () { return $(this).data('key') == item.id }).remove();
    });
    return {
        init : function () {
            cart= $('.cart-data');
        }
    }
}());
