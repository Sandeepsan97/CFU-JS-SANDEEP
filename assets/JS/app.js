
/*get the number of characters*/
let charLength;
function charLength1() {

    charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
   
    return charLength;
  

}
document.getElementById('length').addEventListener('change', charLength1);

const generateBTn=document.getElementById("btn");
generateBTn.addEventListener("click",e=>{

//   const length=  document.getElementById('length').addEventListener('change', charLength1);


    let result=document.getElementById("password__result")
    // console.log(result);
    const upperCasebtn=document.getElementById("uppercase").checked;

    const lowerCasebtn=document.getElementById("lowercase").checked;
    const numbersCasebtn=document.getElementById("numbers").checked;
    const symbolCasebtn=document.getElementById("symbols").checked;


    let passwordLength = charLength;

    let check="";

    if(upperCasebtn==true){
        check+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    }
    if(lowerCasebtn==true){
        check+="abcdefghijklmnopqrstuvwxyz"

    }
    if(numbersCasebtn==true){
        check+="1234567890"

    }
    if(symbolCasebtn==true){
        check+="!@#$%^&*()"

    }

    let store="";

    for(let i=0;i<passwordLength;i++){
                const id_generator=Math.floor(Math.random() * check.length);
                store+=check[id_generator]
              
        result.value=store
            
            }
    
    

})





// function generator(){



//     let result=document.getElementById("password__result")
//     // console.log(result);
//     const upperCasebtn=document.getElementById("uppercase").checked;

//     const lowerCasebtn=document.getElementById("lowercase").checked;
//     const numbersCasebtn=document.getElementById("numbers").checked;
//     const symbolCasebtn=document.getElementById("symbols").checked;

//     let passwordLength = charLength;

// const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lowerCase="abcdefghijklmnopqrstuvwxyz"
// const numbers="1234567890";
// const symbols="!@#$%^&*()"
// let password = '';


// if(upperCasebtn==true){
//     for(let i=0;i<passwordLength;i++){
//         const id_generator=Math.floor(Math.random() * uppercaseLetters.length);
//         password+=uppercaseLetters[id_generator]
      
// result.value=password
    
//     }


    

// }
// if(lowerCasebtn==true){
//     for(let i=0;i<passwordLength;i++){
//         const id_generator=Math.floor(Math.random() * lowerCase.length);
//         password+=lowerCase[id_generator]
    
// result.value=password
//     }
    

// }
// if(numbersCasebtn==true){
//     for(let i=0;i<passwordLength;i++){
//         const id_generator=Math.floor(Math.random() * numbers.length);
//         password+=numbers[id_generator]
    
// result.value=password
//     }
    

// }

// if(symbolCasebtn==true){
//     for(let i=0;i<passwordLength;i++){
//         const id_generator=Math.floor(Math.random() * symbols.length);
//         password+=symbols[id_generator]
    
// result.value=password
//     }


// }

// console.log(password);
    
// }


