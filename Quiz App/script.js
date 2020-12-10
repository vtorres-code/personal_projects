const questions = [
    {question:"What is five in binary?",

        a : "101",
        b : "100",
        c : "010",
        d : "111",

        correct : "a"
    },

    {question :"What is six in binary?",

    a : "101",
    b : "100",
    c : "010",
    d : "110",

    correct : "d"
    },

    {question :"What is three in binary?",

    a : "000",
    b : "100",
    c : "011",
    d : "111",

    correct : "c"
    },

    {question:"What is two in binary?",

    a : "110",
    b : "010",
    c : "101",
    d : "111",

    correct : "b"
    }
];

const questionElement = document.getElementById("question");
const ansA = document.getElementById("a");
const ansB = document.getElementById("b");
const ansC = document.getElementById("c");
const ansD = document.getElementById("d");
const correct= document.getElementById("correct");
const restart = document.getElementById("restart");

restart.addEventListener('click', ()=>{
    restart.style.visibility = "hidden";

    questionElement.innerHTML = questions[0].question;
    
    ansA.innerHTML = questions[0].a;
    ansB.innerHTML = questions[0].b;
    ansC.innerHTML = questions[0].c;
    ansD.innerHTML = questions[0].d;

i =0;
 total = 0;
 correct.innerHTML = `Current Score: ${total}/${questions.length}`;

})

restart.style.visibility = "hidden";

ansA.addEventListener('click', selectAns);
ansB.addEventListener('click', selectAns);
ansC.addEventListener('click', selectAns);
ansD.addEventListener('click', selectAns);



questionElement.innerHTML = questions[0].question;
    
    ansA.innerHTML = questions[0].a;
    ansB.innerHTML = questions[0].b;
    ansC.innerHTML = questions[0].c;
    ansD.innerHTML = questions[0].d;

var i =0;
var total = 0;


function selectAns(){
    //increment count if correct


    switch (this.id){
        case "a":
            if(questions[i].correct == "a"){
                total++;
            }
            break;
        case "b":
            if(questions[i].correct == "b"){
                total++;
            }
            break;
        case "c":
            if(questions[i].correct == "c"){
                total++;
            }
            break;
        case "d":
            if(questions[i].correct == "d"){
                total++;
            }
            break;

    }

    correct.innerHTML = `Current Score: ${total}/${questions.length}`;

    i++;

    if(i < questions.length){
    questionElement.innerHTML = questions[i].question;
    
    ansA.innerHTML = questions[i].a;
    ansB.innerHTML = questions[i].b;
    ansC.innerHTML = questions[i].c;
    ansD.innerHTML = questions[i].d;
    
    }else{
        restart.style.visibility ="visible";
        alert(`You have finished the quiz, your score was ${total}/${questions.length}`);
    }
    //load the next question

    
}







