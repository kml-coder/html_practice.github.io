function toggleMode(clickedbutton){
            const body = document.querySelector('body');
            const links = document.querySelectorAll('a');
            const allbuttons = document.querySelectorAll('.toggle');
            if(clickedbutton.value === 'night'){
                body.style.backgroundColor='black';
                body.style.color = 'white';
                let i = 0;
                while(i< links.length ){
                    links[i].style.color = 'powderblue';
                    i++;
                }
                allbuttons.forEach(btn => btn.value = 'day');

            }
            else{
                let i = 0;
                body.style.backgroundColor ='white'; 
                body.style.color = 'black';
                while(i< links.length ){
                    links[i].style.color = 'blue';
                    i++;
                }
                allbuttons.forEach(btn => btn.value = 'night');
            }   
        }