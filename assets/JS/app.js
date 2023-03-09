
/*get the number of characters*/
let charLength;
function charLength1() {

    charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
   
    return charLength;
  

}

document.getElementById('length').addEventListener('change', charLength1);





// const generateBTn=document.getElementById("btn")
// generateBTn.addEventListener("click",e=>{

//     const upperCase=document.getElementById("uppercase").checked;
// console.log(upperCase);
// let ok;

// // const character="ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghigklmnopqrstuvwxyz0123456789!@#$%^&*()"
// const character="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// if(upperCase==true){
// for(let i=0;i<charLength.length;i++){
//     const id_generator = Math.floor(Math.random() * character);
//     console.log(id_generator);
//      ok+= character.substring(id_generator, id_generator +1);
//      return ok;
   

//   }

// }

// }

// )
     
// console.log(ok);




const generateBTn=document.getElementById("btn");
generateBTn.addEventListener("click",e=>{
    e.preventDefault
    generator()
})





function generator(){



    let result=document.getElementById("password__result").value
    console.log(result);
    const upperCasebtn=document.getElementById("uppercase").checked;

    const lowerCasebtn=document.getElementById("lowercase").checked;
    const numbersCasebtn=document.getElementById("numbers").checked;
    const symbolCasebtn=document.getElementById("symbols").checked;

    let passwordLength = charLength;
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const numbers="1234567890";
const symbols="!@#$%^&*()"
let password = '';



if(upperCasebtn==true){
    for(let i=0;i<passwordLength;i++){
        const id_generator=Math.floor(Math.random() * uppercaseLetters.length);
        password+=uppercaseLetters[id_generator]
      
        result=password
    }


    

}
if(lowerCasebtn==true){
    for(let i=0;i<passwordLength;i++){
        const id_generator=Math.floor(Math.random() * lowerCase.length);
        password+=lowerCase[id_generator]
    
    }
    

}
if(numbersCasebtn==true){
    for(let i=0;i<passwordLength;i++){
        const id_generator=Math.floor(Math.random() * numbers.length);
        password+=numbers[id_generator]
    
    }
    

}

if(symbolCasebtn==true){
    for(let i=0;i<passwordLength;i++){
        const id_generator=Math.floor(Math.random() * symbols.length);
        password+=symbols[id_generator]
    
    }


}









console.log(password);
    
}


