$(function(){

    
    var arr = [
        'img/ptf-aboutus.png',
        'img/ptf-joinus.png',
        'img/ptf-qna.png',
        'img/ptf-shop.png'
        ]
    
    $('.hov').on('mouseover', function(){ 
             
        $('#thumbnail').attr( 'src', arr[Number($(this).data('num'))] );

    });  

    // ---------------------footer random------------

    var fnum = null;

    var farr = [
        'img/ptf150.png',
        'img/converse150.png',
        'img/others150.png'
    ];

    var aaa=[],bln,num2=[];
            function rand() {

                var arrLen = farr.length,currentIndex = 0;

                while(currentIndex < arrLen){
                    
                    fnum = Math.floor(Math.random() * 3);
                  for(var i = 0; i < num2.length; i++){
                        if(fnum == num2[i]){
                            bln = true;
                            break;
                        }
                  }//for
                    if(bln){
                        bln = false;
                    }else{
                        num2.push(fnum);
                        currentIndex++;
                    }
                }   
                
                 console.log(aaa)

                for (var i = 0; i < num2.length; i++) {
                    $('.footer').append("<div style='float:left; '><img src='" + farr[num2[i]] +"' id='banner' alt=''></div>");                 
                    
                } //for

            } //move
            rand();

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
                    scrollTop : 2000
                }, 400);
            });
            $('.second-contents').click(function(){
                $('html,body').animate({
                    scrollTop : 2900
                }, 500);
            });
            $('.third-contents').click(function(){
                $('html,body').animate({
                    scrollTop : 3900
                }, 600);
            });
            $('.fourth-contents').click(function(){
                $('html,body').animate({
                    scrollTop : 5750
                }, 700);
            });

            // ----------------IMGSLIDE----------------

            var p = document.querySelector('.aslide');
            var img = document.querySelectorAll('.ab_left img');
            var btn = document.querySelectorAll('.ab_left button');
            var idx = 0;

            (function () {
                for (var i = 0; i < img.length; i++) {
                    img[i].style = "left:" + (i * 500) + "px";
                }
            })();
                   
            
            function prev() {
                update();
                if (idx != 0) idx--;
                
                p.style = "left:" + (-idx * 100) + "%";
       
            }
       
            function next() {
                update();
                if (idx != img.length - 1) idx++;
                p.style = "left:" + (-idx * 100) + "%";
                
       
            }
       
            function update() {
       
                if (idx == 0) {
                    btn[0].style = 'visibility:hidden';
                } else {
                    btn[0].style = 'visibility:visible';
                }
       
                if (idx == img.length-1) {
                    btn[1].style = 'visibility:hidden';
                } else {
                    btn[1].style = 'visibility:visible';
                }
       
            }
       
        
            btn[0].addEventListener('click', prev);
            btn[1].addEventListener('click', next);
       
            
        });//end
