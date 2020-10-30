const quizform =  document.getElementById('quiz-form');
const h3 = document.getElementById('h3');
const correct = ["A","B","B","B","C"];
quizform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [quizform.q1.value,quizform.q2.value,quizform.q3.value,quizform.q4.value,quizform.q5.value];
    userAnswers.forEach((item,index)=>{
        if(item===correct[index]){
            score+=20;
        }

    });
    scrollTo(0,0);

   
    let interval = 0;
    let timer = setInterval(()=>{
        h3.innerText =  `You are ${interval}% a potterhead`;
        if(interval === score){
            clearInterval(timer);
        }
        else{
            interval++;
        }
    },30);
})
