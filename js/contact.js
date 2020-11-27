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
            $sectionInfo.push($this.offset().top); //배열에 스크롤값 넣음
        });

        $section.css({position:'fixed'});

        $(window).scroll(function(){
            var sct = $(this).scrollTop();//스크롤한 값
            $section.each(function(idx){
                var $this = $(this);
                var $newtop = $sectionInfo[idx] - sct;
                if(sct > $sectionInfo[idx]) {$newtop *= 0.6;}
                $(this).css({top:$newtop});
            });
        });

        var $section1 = $('.swiper-container > swiper-wrapper'),
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
                if(sct1 > $sectionInfo1[idx]) {$newtop1 *= 0.5;}
                $(this).css({top:$newtop1});
            });
        });
        // ===================scroll============================

        window.gambitScrollWheelAmount = 18;
        window.gambitScrollKeyAmount = 20;
        window.gambitScrollDecompositionRate = 0.95;
        window.gambitUseRequestAnimationFrame = true;

        // ==========================workslide===========================

        // ※ 클래스명 myswiper 사용
        new Swiper('.myswiper', {

            // 슬라이드 속도 설정
            // 지정하지 않을시 기본값은 300
            speed : 10,

            navigation : { // 네비게이션 설정
                nextEl : '.swiper-button-next', // 다음 버튼 클래스명
                prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
            },
        });

    //     var fnum = null;

    // var farr = [
    //     'img/tree500.png',
    //     'img/me350.png',
    //     'img/me2350.png',
    //     'img/caree350.png',
    //     'img/about350.png'
    // ];

    // var aaa=[],bln,num2=[];
    //         function rand() {

    //             var arrLen = farr.length,currentIndex = 0;

    //             while(currentIndex < arrLen){
                    
    //                 fnum = Math.floor(Math.random() * 5);
    //               for(var i = 0; i < num2.length; i++){
    //                     if(fnum == num2[i]){
    //                         bln = true;
    //                         break;
    //                     }
    //               }//for
    //                 if(bln){
    //                     bln = false;
    //                 }else{
    //                     num2.push(fnum);
    //                     currentIndex++;
    //                 }
    //             }   
                
    //              console.log(aaa)

    //             for (var i = 0; i < num2.length; i++) {
    //                 $('.num').append("<div style='float:left; '><img src='" + farr[num2[i]] +"' id='banner' alt=''></div>");                 
                    
    //             } //for

    //         } //move
    //         rand();





        // const windowcon = document.querySelector('.windowcon');
        // const container = document.querySelector('.container');
        // const slides = document.querySelectorAll('img');
        // const slidecounter = slides.length;
        
        // let currentIndex = 0;

        // for(i=0; i <slidecounter; i++){
        //     slides[i].style.left = '${i*100)%';
        // }

        // function calcul(){
        //     for(i=0; i<slidecounter; i++){
        //         if(windowcon.offsetHeight < slides[i].offsetHeight){
        //             windowcon.style.height = slides[i].offsetHeight + "px";
        //             windowcon.style.width = slides[i].offsetWidth + "px";
        //         }
        //     }
        // }
        // calcul();
        
        // var lele = 0;
        // var i = 0;
        // function moveleft(){
        //     if(i < slidecounter-1){
        //         lele += 100;
        //         i++;
        //         container.style.transition = '.3s'
        //     }else{
        //         container.style.transition = '0s'
        //         lele = 0;
        //         i = 0;
        //     }
        //     container.style.left = "-" + lele + '%'
        // }

        // function moveevent(){
        //     setInterval(moveleft, 5000)
                
         
        // }
        // moveevent();
});//end