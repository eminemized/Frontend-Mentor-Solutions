'use strict';
{
    const lists = document.querySelectorAll('.rating li');


    lists.forEach(list => {
        list.addEventListener('click', e => {
            e.preventDefault();  

            lists.forEach(index => {
                index.classList.remove('on');
            });

            list.classList.add('on');

            //JQueryを使わずに
            function prevAll(element){
                var prevSibling = [];

                while(element = element.previousElementSibling){
                    element.classList.add('on');
                    prevSibling.push(element);                  
                }
                return prevSibling;

            }

            // console.log(prevAll(list));
            prevAll(list);
                  
        });
    });

    


}


