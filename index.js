
let desplay=document.getElementById('display');

let bonton=Array.from(document.getElementsByClassName('bouton'));


bonton.map(bonton=>{
    bonton.addEventListener('click',(e)=>{
        switch(e.target.innerText){

            case'c':
                desplay.innerText='';
                break;  
            case '←':
                if(desplay.innerText){
                    desplay.innerText=desplay.innerText.slice(0,-1);
                }
                break;
            
                case'=':
                desplay.innerText=eval(desplay.innerText);
                break;
            
                default:
                desplay.innerText += e.target.innerText;
                break;
        }
    })
})


// A LOT OF MISTAKES TO RE FIX 