let myArray=[];
let questionIndex =0;
var correctQn =0;
var wrongQn=0;
var qn=0;


document.getElementById("close").addEventListener("click",hide);
document.getElementById("send").addEventListener("click",send);



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
        document.getElementById("ruleText").innerHTML = "<b>"+name+"</b>"+" welcome to quiz";


    }


}

function start(){
    document.getElementById("userReplay").setAttribute("class","hide");
    document.getElementById("rules").setAttribute("class","hide");
    document.getElementById("inputSection").setAttribute("class","hide");
    document.getElementById("name").setAttribute("class","hide");
    document.getElementById("troll").setAttribute("class","hide");
    document.getElementById("question").classList.remove("hide");
    generateRandomQuestion()
}



troll=[
    { correct:['super ',' aswsome'],
      wrong:['wrong 1','wrong 2'],

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
    document.getElementById("userAns").innerText = myApp[questionIndex].options[0];


    
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
    document.getElementById("userAns").innerText = myApp[questionIndex].options[1];
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
    document.getElementById("userAns").innerText = myApp[questionIndex].options[2];
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
    document.getElementById("userAns").innerText = myApp[questionIndex].options[3];
   }


   function wrong(){
    wrongQn=wrongQn+1;
    const wrong = Math.floor(Math.random() * troll[0].wrong.length);
    document.getElementById("answerReplay").classList.remove("hide");
    document.getElementById("response").innerHTML= troll[0].wrong[wrong];
   
   }

   function correct(){
    correctQn =correctQn+1;
    const correct = Math.floor(Math.random() * troll[0].correct.length);
    document.getElementById("answerReplay").classList.remove("hide");
    document.getElementById("response").innerHTML= troll[0].correct[correct];

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
