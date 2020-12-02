$(function(){


    //------------- -----scrollPlugin-----

    window.gambitScrollWheelAmount = 18;
    window.gambitScrollKeyAmount = 20;
    window.gambitScrollDecompositionRate = 0.95;
    window.gambitUseRequestAnimationFrame = true;

    //------------- -----parallaxScroll--------------

    var $section = $('#about_us > .qwerr'),
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
                if(sct > $sectionInfo[idx]) {$newtop *= 0.7;}
                $(this).css({top:$newtop});
                
            });
        });

    var $section1 = $('#join_us > .qwerr1'),
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
                if(sct1 > $sectionInfo1[idx]) {$newtop1 *= 0.7;}
                $(this).css({top:$newtop1});
            });
        });

        var $section2 = $('#shop > .qwerr2'),
        $sectionInfo2 = [];
    
        $section2.each(function(){
            var $this2 = $(this);
            $sectionInfo2.push($this2.offset().top); //배열에 스크롤값 넣음
        });

        $section2.css({position:'fixed'});

        $(window).scroll(function(){
            var sct2 = $(this).scrollTop();//스크롤한 값
            $section2.each(function(idx){
                var $this2 = $(this);
                var $newtop2 = $sectionInfo2[idx] - sct2;
                if(sct2 > $sectionInfo2[idx]) {$newtop2 *= 0.7;}
                $(this).css({top:$newtop2});
            });
        });

        // --------------------------------

        var $section3 = $('#qna > .qwerr3'),
        $sectionInfo3 = [];
    
        $section3.each(function(){
            var $this3 = $(this);
            $sectionInfo3.push($this3.offset().top); //배열에 스크롤값 넣음
        });

        $section3.css({position:'fixed'});

        $(window).scroll(function(){
            var sct3 = $(this).scrollTop();//스크롤한 값
            $section3.each(function(idx){
                var $this3 = $(this);
                var $newtop3 = $sectionInfo3[idx] - sct3;
                if(sct3 > $sectionInfo3[idx]) {$newtop3 *= 0.7;}
                $(this).css({top:$newtop3});
            });
        });
    
        // --------------------------topBtn-----------------

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

            $('.first-contents').click(function(){
                $('html,body').animate({
                    scrollTop : 400
                }, 400);
            });
            $('.second-contents').click(function(){
                $('html,body').animate({
                    scrollTop : 1700
                }, 1400);
            });
            $('.third-contents').click(function(){
                $('html,body').animate({
                    scrollTop : 3000
                }, 1200);
            });
            $('.fourth-contents').click(function(){
                $('html,body').animate({
                    scrollTop : 4250
                }, 1000);
            });

           
       
            
        });//end
