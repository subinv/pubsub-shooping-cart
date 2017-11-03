var prodList = (function () {
    return {
        init : function () {
            var list = $('.record');

            list.on('click','.glyphicon',function () {
                var _this = $(this),
                    item = {
                        id : this.id,
                        name: _this.next().text()
                    };
                if (_this.hasClass('glyphicon-plus')){
                    pubsub.pub('add-to-cart',item);
                    _this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
                }else {
                    pubsub.pub('remove-from-cart',item);
                    _this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
                }
            });
        }
    }
}());
