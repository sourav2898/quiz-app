const question_book = [
    {
        question: 'A local variable is stored in ___',
        a: 'Code Segment',
        b: 'Stack Segment',
        c: 'heap Segment',
        d: 'None of the above'
    },
    {
        question: 'In the standard library of C programming language, which of the following header file is designed for basic mathematical operations?',
        a: 'math.h',
        b: 'conio.h',
        c: 'dos.h',
        d: 'stdio.h'
    },
    {
        question: 'Which library function can convert an integer/long to a string?',
        a: 'itoa',
        b: 'ultoa',
        c: 'Sprintf',
        d: 'None of the above'
    },
    {
        question: 'Choose the invalid predefined macro as per ANSI C.',
        a: '__FILE__',
        b: '__DATE__',
        c: '__TIME__',
        d: '__C++__'
    },
    {
        question: 'Identify the incorrect file opening mode from the following.',
        a: 'r',
        b: 'w',
        c: 'x',
        d: 'a'
    }
];

const answer_book = ['Stack Segment','math.h','itoa','__C++__','x'];

const display_time = document.getElementById("time");
const question_number = document.getElementById("count"); 
const ques = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const next = document.getElementById("next");
const submit = document.getElementById("submit");
const score_board = document.getElementById("score_board");
const score_display = document.getElementById("score");
const ele = document.getElementsByName("answer");

let count = 15;
let current_question = 0;
var score = 0;
quiz();
if(current_question < question_book.length) setInterval(timer,1000);

function timer(){
    if(current_question<=question_book.length && count>=0){
        display_time.innerHTML = formatTime(count);
        count -=1;
    }
    else if(current_question<question_book.length){
        quiz();
    }
    else{
        count = 0;
        score_board.style.display = "block";
        score_display.innerHTML = score;
    }
}

function formatTime(time){
    return time>=10 ? time : (`0${time}`); 
}

function quiz(){
    count = 15;
    timer();
    question_number.innerHTML = current_question+1;
    ques.innerHTML = question_book[current_question].question;
    a_text.innerHTML = question_book[current_question].a;
    b_text.innerHTML = question_book[current_question].b;
    c_text.innerHTML = question_book[current_question].c;
    d_text.innerHTML = question_book[current_question].d;
    if(current_question <= question_book.length){
        current_question+=1;
    } 
              
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            if(ele[i].value == answer_book[current_question]) score+=1;
        }
    } 
    
}

next.addEventListener("click", ()=>{
    if(current_question < question_book.length) quiz();
    else {
        count = 0;
        score_board.style.display = "block";
        score_display.innerHTML = score;
    }
}); 

function playAgain(){
    count = 15;
    score_board.style.display = "none";
    current_question = 0;
    score = 0;
    quiz();
}

