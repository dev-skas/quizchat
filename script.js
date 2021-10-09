let myArray=[];
let retryArray=[];
let restartArray =[];

let questionIndex =0;
var correctQn =0;
var wrongQn=0;
var qn=0;


document.getElementById("close").addEventListener("click",hide);
document.getElementById("send").addEventListener("click",send);
document.getElementById("retry").addEventListener("click",retry);
document.getElementById("restart").addEventListener("click",restart);






function hide(){
 document.getElementById("chatContainer").setAttribute("class","hide")

}
function chatView(){
    document.getElementById("chatContainer").removeAttribute("class","hide")
    
}
function send(){
    
     var name = document.getElementById("input").value;
    if(name==""){
        alert("enter name please")
    }else{
        document.getElementById("userReplay").classList.remove("hide");
        document.getElementById("userReplay").innerText =name;
        document.getElementById("inputSection").setAttribute("class","hide");
        document.getElementById("rules").classList.remove("hide");
        document.getElementById("ruleText").innerHTML = "Hi <b>"+name+"</b>  ഇപ്പോൾ ഞാൻ "+ myApp.length+" ചോദ്യങ്ങൾ മാത്രമേ പഠിച്ചിട്ടുള്ളു. അത് നിങ്ങൾക്കും പഠിക്കാം. എന്റെ മൊതലാളി കൂടുതൽ ചോദ്യങ്ങൾ പഠിപ്പിക്കുമ്പോൾ നിങ്ങൾക്കും ആ ചോദ്യങ്ങൾ ലഭ്യമാകും. ഓരോ ചോദ്യത്തിനും ഒരു മാർക്കാണ്. നെഗറ്റിവ് മാർക്ക്‌ ഇല്ല";


    }


}

function start(){
    restartArray =myApp;
    document.getElementById("userReplay").setAttribute("class","hide");
    document.getElementById("rules").setAttribute("class","hide");
    document.getElementById("inputSection").setAttribute("class","hide");
    document.getElementById("name").setAttribute("class","hide");
    document.getElementById("troll").setAttribute("class","hide");
    document.getElementById("question").classList.remove("hide");
    generateRandomQuestion()
}



troll=[
    { correct:["ബോസ് ഞാൻ നിങ്ങടെ ഒരു ആരാധകൻ ആയിട്ടോ..."," നിങ്ങൾ ആളു ബുജിയാണെല്ലേ"," നീ ആരെടെയ് പുസ്തക പുഴുവോ..."," തൃപ്തിയായി മൊതലാളി തൃപ്തിയായി..."," നിങ്ങൾ പുലിയാണ് മൊതലാളി..."," നീ പൊന്നപ്പനെല്ലടാ തങ്കപ്പനാ തങ്കപ്പൻ"," കളറായിട്ടുണ്ടല്ലോ"," കിടുക്കി തിമിർത്തു കലക്കി"," നിങ്ങൾ സൂപ്പറാ"," വണ്ടർഫുൾ"," ഹോ! ഭയങ്കരം തന്നെ"," കലക്കി മൊതലാളി"," നീ ഇത്രേം ഭയങ്കരൻ ആയ വിവരം ഞാനറിഞ്ഞില്ല"," നീ സുലയ്മാൻ അല്ലടാ ഹനുമാനാ"," ഇത്രേം കാലം എവിടെയായിരുന്നു"," പണ്ഡിതനാണെന് തോനുന്നു..."," ബലെ ഭേഷ്"," കൊള്ളാം മോനെ നിന്നെ ഞാൻ നിരുത്സാഹപ്പെടുത്തുന്നില്ല"," പത്ത്‌ തലയാ തനി രാവണൻ"," അമ്പട കേമാ സണ്ണി കുട്ടാ","  വെൽഡൻ മിസ്റ്റർ പെരേര"],
      wrong:["I am the sorry അളിയാ"," എന്റെ ഭാഗത്തും തെറ്റുണ്ട്"," എല്ലാം വിധിയുടെ വിളയാട്ടം"," എന്നെ കൊല്ലാതിരിക്കാൻ പറ്റോ"," കഷ്ട്ടം തന്നെ മൊതലാളി"," എന്തൊരു കഷ്ടമാണ്"," കരയിപ്പിക്കലെടാ"," ഒരു മാറ്റോം ഇല്ല"," ഇതൊക്ക രാജ്യത്തിന്റെ വളർച്ചയ്ക്ക് വേണ്ടിയാണെന്ന് ആലോചിക്കുമ്പോഴാ...."," അങ്ങനെ പവനായി ശവമായി"," ഇങ്ങോട്ടൊന്നും പറയണ്ട"," എന്തൊരു മനോഹരമായ നടക്കാത്ത സ്വപനം"," എടാ ദാസാ ഏതാ ഈ അലവലാതി"," ഇത്രക്ക് ചീപ്പാണോ ആര്ടിസ്റ് ബേബി"," ഒരിച്ചിരി ഉളുപ്പ്"," ഇവിടരുമില്ലേ ഇതൊന്ന് പറഞ്ഞു ചിരിയ്ക്കാൻ"," ദേ വന്നിരിക്കുന്നു നിന്റെ മോൻ"," അഹ് ബെസ്റ്റ്"," അന്തസ് വേണമെടാ അന്തസ്"," എന്തോന്നടേയ് ഇത്"," എന്താടോ നന്നാവാത്തെ"," യ്യോ ദാരിദ്ര്യം"]

    }

]



// myApp=[
//     {
//     question:'भारत में 2 सर्वोच्च शौर्य पुरस्कार है',
//     options:['परमवीर चक्र','परमवीर चक्र व महावीर चक्र','परमवीर चक्र व वीर चक्र ','अशोक चक्र व महावीर चक्र'],
//     answer:'A',
//     description:"hgygugftdbjkjjhfdccgcvgcg"
//     }
// ]


function generateRandomQuestion(){

    const randomNumber=Math.floor(Math.random() * myApp.length);
   let hitDuplicate=0;
   if(myArray.length==myApp.length){
    hideretry();
    document.getElementById("question").classList.add("hide");
    document.getElementById("questions").innerHTML =myApp.length
    document.getElementById("attempt").innerHTML =qn;
    document.getElementById("correct").innerHTML =correctQn;
    document.getElementById("wrong").innerHTML =wrongQn;    
    document.getElementById("markSheet").classList.remove("hide");

     
   }
   else if(myArray.length == 0){
        questionIndex=randomNumber;
    }
    else{
        for(let i=0; i<myArray.length; i++){
            if(randomNumber == myArray[i]){
                //if duplicate found
                hitDuplicate=1;
                
            }
        }
        if(hitDuplicate == 1){
            generateRandomQuestion();
            return;
        }
        else{
            questionIndex=randomNumber;
        }
    }
    
    myArray.push(randomNumber);    
    load();
    
}
    
   function load() {
    


    enable()
    qn =qn+1;
    document.getElementById("questionText").innerHTML= myApp[questionIndex].question;
    document.getElementById("A").innerHTML= myApp[questionIndex].options[0];
    document.getElementById("B").innerHTML= myApp[questionIndex].options[1];
    document.getElementById("C").innerHTML= myApp[questionIndex].options[2];
    document.getElementById("D").innerHTML= myApp[questionIndex].options[3];


   }
    
    
    
   document.getElementById("A").addEventListener("click",checkA);
   document.getElementById("B").addEventListener("click",checkB);
   document.getElementById("C").addEventListener("click",checkC);
   document.getElementById("D").addEventListener("click",checkD);

   function checkA(){
    disable()
    if(myApp[questionIndex].answer=="A"){
 
     document.getElementById(myApp[questionIndex].answer).classList.add("correct");
     correct();
 
    }else{
      document.getElementById(myApp[questionIndex].answer).classList.add("correct");
      document.getElementById("A").classList.add("wrong");
      wrong();
 
    }

    document.getElementById("userAnswer").classList.remove("hide");
    document.getElementById("userAns").innerHTML = myApp[questionIndex].options[0];


    
   }

   function checkB(){
    disable()

    if(myApp[questionIndex].answer=="B"){
        
     document.getElementById(myApp[questionIndex].answer).classList.add("correct");
     correct();
 
    }else{
      document.getElementById(myApp[questionIndex].answer).classList.add("correct");
      document.getElementById("B").classList.add("wrong");
      wrong();
 
    }
    document.getElementById("userAnswer").classList.remove("hide");
    document.getElementById("userAns").innerHTML = myApp[questionIndex].options[1];
   }



   function checkC(){
    disable()

    if(myApp[questionIndex].answer=="C"){
 
     document.getElementById(myApp[questionIndex].answer).classList.add("correct");
     correct();
 
    }else{
      document.getElementById(myApp[questionIndex].answer).classList.add("correct");
      document.getElementById("C").classList.add("wrong");
      wrong();
 
    }
    document.getElementById("userAnswer").classList.remove("hide");
    document.getElementById("userAns").innerHTML = myApp[questionIndex].options[2];
   }


   function checkD(){
    disable()

    if(myApp[questionIndex].answer=="D"){
 
     document.getElementById(myApp[questionIndex].answer).classList.add("correct");
     correct()
 
    }else{
      document.getElementById(myApp[questionIndex].answer).classList.add("correct");
      document.getElementById("D").classList.add("wrong");
      wrong();
 
    }
     document.getElementById("userAnswer").classList.remove("hide");
    document.getElementById("userAns").innerHTML = myApp[questionIndex].options[3];
   }


   function wrong(){

    
     retryArray.push(myApp[questionIndex]);


    wrongQn=wrongQn+1;
    const wrong = Math.floor(Math.random() * troll[0].wrong.length);
    document.getElementById("answerReplay").classList.remove("hide");
    document.getElementById("response").innerHTML= "നിങ്ങൾ  തിരഞ്ഞെടുത്ത ഉത്തരം  <b style='color: red;'> തെറ്റാണ്</b>.<br>"+troll[0].wrong[wrong];
   
   }

   function correct(){
    correctQn =correctQn+1;
    const correct = Math.floor(Math.random() * troll[0].correct.length);
    document.getElementById("answerReplay").classList.remove("hide");
    document.getElementById("response").innerHTML= "നിങ്ങൾ  തിരഞ്ഞെടുത്ത ഉത്തരം  <b style='color: green;'>ശരിയാണ്</b>.<br>"+troll[0].correct[correct];

   }

   document.getElementById("next").addEventListener("click",next);

   function next(){
    document.getElementById("answerReplay").classList.add("hide");
    document.getElementById("userAnswer").classList.add("hide");
    generateRandomQuestion();
    document.getElementById("A").className = "";
    document.getElementById("B").className = "";
    document.getElementById("C").className = "";
    document.getElementById("D").className = "";

  

   }

   document.getElementById("end").addEventListener("click",end);

function end(){    
    hideretry();
    document.getElementById("answerReplay").classList.add("hide");
    document.getElementById("userAnswer").classList.add("hide");
    document.getElementById("question").classList.add("hide");
    document.getElementById("questions").innerHTML =myApp.length
    document.getElementById("attempt").innerHTML =qn;
    document.getElementById("correct").innerHTML =correctQn;
    document.getElementById("wrong").innerHTML =wrongQn;    
    document.getElementById("markSheet").classList.remove("hide");

}

function disable(){
    document.getElementById("A").disabled=true;
    document.getElementById("B").disabled=true;
    document.getElementById("C").disabled=true;
    document.getElementById("D").disabled=true;

}
function enable(){
    document.getElementById("A").disabled=false;
    document.getElementById("B").disabled=false;
    document.getElementById("C").disabled=false;
    document.getElementById("D").disabled=false;

}
function notNow(){
    var name = document.getElementById("input").value;
    document.getElementById("userReplay").setAttribute("class","hide");
    document.getElementById("rules").setAttribute("class","hide");
    document.getElementById("inputSection").setAttribute("class","hide");
    // document.getElementById("name").setAttribute("class","hide");
    document.getElementById("troll").setAttribute("class","hide");
    document.getElementById("name").classList.remove("hide");
    document.getElementById("payment").classList.remove("hide");
    

    document.getElementById("nameText").innerHTML = "Hi <b>"+name+"</b> ഒത്തിരി പേരെ പഠിപ്പിച്ചു തളർനിരിക്കുവാണ്  അപ്പോഴാണ് ഒരു തമാശ. വന്ന സ്ഥിതിക്ക് ഒരു ചോദ്യമെങ്കിലും നോക്കാമായിരുന്നു. 😪<br><b>To restart please refresh the page</b>";
    

}
console.log("😘 Project is under developement");

function retry(){
    document.getElementById("markSheet").classList.add("hide");
    document.getElementById("question").classList.remove("hide");
         questionIndex =0;
         myApp = retryArray;
         myArray=[];
         retryArray=[];
         correctQn =0;
         wrongQn=0;
         qn=0;
  
    document.getElementById("A").className = "";
    document.getElementById("B").className = "";
    document.getElementById("C").className = "";
    document.getElementById("D").className = "";
         generateRandomQuestion();
}

function hideretry(){
    if(retryArray.length=="0"){
        document.getElementById("retry").classList.add("hide");
      }else{
        document.getElementById("retry").classList.remove("hide");

      }
}

function restart(){
    
    document.getElementById("markSheet").classList.add("hide");
    document.getElementById("question").classList.remove("hide");
         questionIndex =0;
         myApp = restartArray;
         myArray=[];
         retryArray=[];
         correctQn =0;
         wrongQn=0;
         qn=0;
   
    document.getElementById("A").className = "";
    document.getElementById("B").className = "";
    document.getElementById("C").className = "";
    document.getElementById("D").className = "";
         generateRandomQuestion();

}