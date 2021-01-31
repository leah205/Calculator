

operatorBtns = document.querySelectorAll('.operator');
para = document.querySelector('#pConsole');

let Btns = document.querySelectorAll('button');
let symbol = '';
let btnSymbol;


Btns.forEach((btn)=>{
    btn.addEventListener('click', () => {
        let paraArray = Array.from(para.textContent);
        let a = (paraArray.slice(0, paraArray.indexOf(symbol))).join('');
        let b = paraArray.slice(paraArray.indexOf(symbol) + 1,  paraArray.length).join('');
        paraArray = Array.from(para.textContent);
        const isOperator = paraArray.some((letter => (letter === '*' ) || (letter === '-') || (letter === '+') || (letter === '%')));
        
         if(btn.getAttribute('class')== 'equals'){
             
             if(b == 0 && symbol === '%'){
                 para.textContent =('Don\'t mess with me like that!')
             }
             else if(isOperator === false || (a||b)==''){
                 return;
             }
              else{para.textContent = round(operate(+a,+b));}
              
        }
        else if(btn.getAttribute('class')=== 'backSpace'){

           (paraArray.pop());
            para.textContent = paraArray.join('');
            

        }
        else if( isOperator ===  true && btn.getAttribute('class')=== 'operator'){
            para.textContent = round(operate(+a,+b));
            para.textContent += btn.textContent;
            let btnSymbol = btn.textContent;
            symbol = btnSymbol;
    

       }
        else if(btn.getAttribute('class')=== 'operator'){
            para.textContent += btn.textContent;
            let btnSymbol = btn.textContent;
            symbol = btnSymbol;
        }
      
     
         else if(btn.getAttribute('class') == 'clear'){
            para.textContent = '';
        }
        
        else
        {
            para.textContent += btn.textContent;
           }
       
        })
    })
    function operate(a,b){
        if(symbol == '%'){
               return a/b;
  }
       else if(symbol == '*'){
               return a*b;
  }   
       else if(symbol == '+'){
               return +a+b
  }
        else{
               return a-b;
  }   
  }
  function round(number){
      
      number = number.toString();
      
      number = Array.from(number);
      const isDecimal = number.some((character)=> (character === '.'));
      number = number.join('');
      if(isDecimal === true){
        let rounded = (+number).toFixed(3);
        roundedArr = Array.from(rounded);
        for(let i = 0; i < 2; i++){
        if(roundedArr[roundedArr.length -1] == 0){
            roundedArr.pop();
            rounded = roundedArr.join('')
        }}
        return rounded;
        
      }
      return +number;
     
     
      
      
  }
      
   
      





