function toggleMode(clickedbutton){
            const body = document.querySelector('body');
            // const links = document.querySelectorAll('a'); 배열로 links에 a 태그들 다 넣어줌
            const allbuttons = document.querySelectorAll('.toggle');
            if(clickedbutton.value === 'night'){
                //body.style.backgroundColor='black';
                $('body').css("backgroundColor", 'black');
                body.style.color = 'white';
                let i = 0;
                $('a').css("color","powderblue");
                allbuttons.forEach(btn => btn.value = 'day');

            }
            else{
                let i = 0;
                body.style.backgroundColor ='white'; 
                body.style.color = 'black';
                $('a').css("color","blue"); // jquery로 동작 $(지정할 태그).css("지정할 속성", "변화값") 하면 
                /*
                while(i< links.length ){
                    links[i].style.color = 'blue';
                    i++;
                }
                이걸 대체 가능하다 반복문 대체가능 */
                allbuttons.forEach(btn => btn.value = 'night');
            }   
        }