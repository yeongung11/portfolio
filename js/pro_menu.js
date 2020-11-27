$(function(){
    

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

        
});//end