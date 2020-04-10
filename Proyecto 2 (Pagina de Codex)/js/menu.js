jQuery('document').ready(function($){

     var menubtn = $('.ver-menu');
          menu = $('.navigation ul');

          menubtn.click(function(){
               if(menu.hasClass('.show')){
                    menu.removeClass('.show');
               }else{
                    menu.addClass('.show');
               }
          });
});