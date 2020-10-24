// //immediate invoked function expression
// (function() {
//   const btn = document.getElementById("generate-btn");

//   btn.addEventListener("click", function() {
//     let random = Math.floor(Math.random() * quotes.length);
//     console.log(random);

//     document.getElementById("quote").textContent = quotes[random].quote;
//     document.querySelector(".author").textContent = quotes[random].author;
//   });
// })();

(function(){
  const quotes = [
    {
      quote:'As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.',
      author:'Audrey Hepburn'
    },
    {
      quote:'Dark and difficult times lie ahead. Soon we must all face the choice between what is right and what is easy.',
      author:'J K Rowling'
    },
    {
      quote:'Excellence happens not by accident. It is a process.',
      author:'Abdul Kalam'
    },
    {
      quote:'He can who thinks he can, and he can\'t who thinks he can\'t. This is an inexorable, indisputable law.”',
      author:'Pablo Picasso'
    },
    {
      quote:'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.',
      author:'Nelson Mandela'
    },
    {
      quote:'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.',
      author:'Earl Nightingale'
    },
    {
      quote:'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
      author:'James Cameron'
    },
    {
      quote:'Many of life\'s failures are people who did not realize how close they were to success when they gave up.',
      author:'Thomas A. Edison'
    },

  ];

  const generatebtn = document.getElementById('generate-btn');
  generatebtn.addEventListener('click', ()=>{
    let generator = Math.floor(Math.random()*quotes.length);
    console.log(generator);
    document.getElementById('quote').textContent = quotes[generator].quote;
    document.getElementById('author').textContent = quotes[generator].author;
  });
})
();