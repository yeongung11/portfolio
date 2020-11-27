$(function(){
    
    new Swiper('.myswiper', {

        
        speed : 10,

        navigation : { 
            nextEl : '.swiper-button-next', 
            prevEl : '.swiper-button-prev', 
        },
    });

    var $section = $('.seh > .sebu'),
    $sectionInfo = [];

    $section.each(function(){
        var $this = $(this);
        $sectionInfo.push($this.offset().top); //배열에 스크롤값 넣음
    });

    $section.css({position:'fixed'});

    $(window).scroll(function(){
        var sct = $(this).scrollTop();//스크롤한 값
        $section.each(function(idx){
            var $this = $(this);
            var $newtop = $sectionInfo[idx] - sct;
            if(sct > $sectionInfo[idx]) {$newtop *= 0.4;}
            $(this).css({top:$newtop});
            
        });
    });

    var $section1 = $('.my-pic > .nn'),
    $sectionInfo1 = [];

    $section1.each(function(){
        var $this1 = $(this);
        $sectionInfo1.push($this1.offset().top); //배열에 스크롤값 넣음
    });

    $section1.css({position:'fixed'});

    $(window).scroll(function(){
        var sct1 = $(this).scrollTop();//스크롤한 값
        $section1.each(function(idx){
            var $this1 = $(this);
            var $newtop1 = $sectionInfo1[idx] - sct1;
            if(sct1 > $sectionInfo1[idx]) {$newtop1 *= 0.1;}
            $(this).css({top:$newtop1});
            
        });
    });

    var num = null;

    var arr = [
        'img/ptf150.png',
        'img/converse150.png',
        'img/others150.png'
    ];

    var aaa=[],bln,num2=[];
            function rand() {

                var arrLen = arr.length,currentIndex = 0;

                while(currentIndex < arrLen){
                    
                    num = Math.floor(Math.random() * 3);
                  for(var i = 0; i < num2.length; i++){
                        if(num == num2[i]){
                            bln = true;
                            break;
                        }
                  }//for
                    if(bln){
                        bln = false;
                    }else{
                        num2.push(num);
                        currentIndex++;
                    }
                }   
                
                 console.log(aaa)

                for (var i = 0; i < num2.length; i++) {
                    $('.footer').append("<div style='float:left; '><img src='" + arr[num2[i]] +"' id='banner' alt=''></div>");                 
                    
                } //for

            } //move
            rand();

            // --------------topBtn------------

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

            $('#checkbox').change(function(){
                setInterval(function () {
                    moveRight();
                }, 3000);
              });
        // ----------------slider----------------


             var slideCount = $('#slider ul li').length;
             var slideWidth = $('#slider ul li').width();
             var slideHeight = $('#slider ul li').height();
             var sliderUlWidth = slideCount * slideWidth;
                
                $('#slider').css({ width: slideWidth, height: slideHeight });
                
                $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
                
                $('#slider ul li:last-child').prependTo('#slider ul');
            
                function moveLeft() {
                    $('#slider ul').animate({
                        left: + slideWidth
                    }, 200, function () {
                        $('#slider ul li:last-child').prependTo('#slider ul');
                        $('#slider ul').css('left', '');
                    });
                };
            
                function moveRight() {
                    $('#slider ul').animate({
                        left: - slideWidth
                    }, 200, function () {
                        $('#slider ul li:first-child').appendTo('#slider ul');
                        $('#slider ul').css('left', '');
                    });
                };
            
                $('a.control_prev').click(function () {
                    moveLeft();
                });
            
                $('a.control_next').click(function () {
                    moveRight();
                });
            
               
});//end