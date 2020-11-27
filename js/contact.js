$(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });

    $('#topBtn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
   

    var $section = $('.mc > video'),
        $sectionInfo = [];
    
        $section.each(function(){
            var $this = $(this);
            $sectionInfo.push($this.offset().top);
        });

        $section.css({position:'fixed'});

        $(window).scroll(function(){
            var sct = $(this).scrollTop();
            $section.each(function(idx){
                var $this = $(this);
                var $newtop = $sectionInfo[idx] - sct;
                if(sct > $sectionInfo[idx]) {$newtop *= 0.15;}
                $(this).css({top:$newtop});
            });
        });

    // ===================scroll============================

        window.gambitScrollWheelAmount = 18;
        window.gambitScrollKeyAmount = 20;
        window.gambitScrollDecompositionRate = 0.95;
        window.gambitUseRequestAnimationFrame = true;

});//end