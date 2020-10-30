//apikey
const apiKey = 'rOzGPY3Vh2vhpmUG7iqOknx7RWnqRTVix3PDRQNjM4s'; //Access Key
const count= 10;
const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let newarr= [];
const img = document.getElementById('img');
const loader = document.getElementById('loader');
let totalimages = 0;
let ready = false;
let loadedimages = 0;

function loaded(){
    console.log('loaded');
    loadedimages++;
    if(loadedimages === totalimages){
        ready=true;
        loader.hidden = true;
        console.log(ready);
    }
}

function utilities(item,property){
    for(let key in property){
        item.setAttribute(key,property[key]);
        //atag.setattribute(href,item.links.html,)
    }
}

function display(){
    loadedimages=0;
   totalimages= newarr.length;
   console.log(totalimages);
    newarr.forEach(item=>{
        const atag= document.createElement('a');
        utilities(atag,{
            href:item.links.html,
            target:'_blank',
        });
        //img 
        const imgtag = document.createElement('img');
        utilities(imgtag,{
            src:item.urls.regular,
            title:item.alt_description,
        })
        //checking if its loader
        imgtag.addEventListener('load',loaded)

        //append
        atag.appendChild(imgtag);
        img.appendChild(atag);
    })
}
async function getData(){

    try{
        const data = await fetch(url);
        newarr = await data.json();
        display();
    }
    catch(error){
        console.log('error');
    }
}


//check to see if reached the end and then load photos

window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight && ready==true){
        ready=false;
        getData();
    }
})


//call
getData();