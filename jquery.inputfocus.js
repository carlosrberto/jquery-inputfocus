/*
 * jQuery inputfocus
 *
 * Copyright (c) 2009 Carlos Roberto Gomes Júnior
 * 
 */
(function() {
jQuery.fn.inputfocus = function(options) {
    settings = jQuery.extend({
        text:false
    }, options);

    function init(obj){
        var rtxt = settings.text || obj.val();
        obj.val(rtxt);
        obj.focus(function(){
            if($(this).val() == rtxt){
                $(this).val('');
            }
        });
        
        obj.blur(function(){
            if($(this).val() == ''){
                $(this).val(rtxt);
            }
        });
    }
   
   return this.each(function(){
       init($(this));
   });
};
})(jQuery);