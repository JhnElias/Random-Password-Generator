let dum1=''
let dum2=''
let first=document.getElementById("pass-one");
let second=document.getElementById("pass-two");
let finalPass1=''
let finalPass2=''


const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!"
,"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; //all the characters that are used for the random password to be created

function getPass(){
    let password1=[]
    let password2=[]    
    for(let i=0;i<15;i++){
    dum1=(Math.floor(Math.random()* characters.length)) //gets a random number from 0 to length of characters array
    dum2=(Math.floor(Math.random()* characters.length))
    password1.push(characters[dum1]) //push into the last possition of the array the character wich is in thw [dum1] possition
    password2.push(characters[dum2]) 
    }
    finalPass1=password1.join(''); //joins password1 array into a string (without commas)
    finalPass2=password2.join('');
    showPass()
}

function showPass(){
    first.textContent=finalPass1 //shows the password inside <p>
    second.textContent=finalPass2
}



