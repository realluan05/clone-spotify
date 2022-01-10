jQuery(function($y){
    $y('.icon-menu').click(function(){
        $y(this).toggleClass('active');
        $y(this).next().toggleClass('active');
    });
});