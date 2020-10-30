class toolTip {
    constructor(element){
        this.element = element;
        this.message = element.getAttribute('data-message');
    }  
    init(){
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);
        this.element.addEventListener('mouseenter',()=>{
            tip.classList.add('active');
        });
        this.element.addEventListener('mouseleave',()=>{
            tip.classList.remove('active');
        });
    }
}

const Tooltip  = new toolTip(document.querySelector('.span'));
Tooltip.init();

//Sec 2

class dropDown{
    constructor(container){
        this.container = container;
        this.press = container.querySelector('.press');
        this.content = container.querySelector('.content');
    }
    init(){
    this.press.addEventListener('click',()=>{
        console.log("pressed");
        this.content.classList.toggle('active');
    })
    }
}

const drop = document.querySelectorAll('.dropdown');
drop.forEach(item=>{
    const DropDown = new dropDown(item);
    console.log(item);
   DropDown.init();
})

//end of sec 2

//sart of sec 3
class Tabs{
    constructor(container){
        this.container = container;
        this.trigger= container.querySelectorAll('.trigger');
        // this.contents = container.querySelector('.contents');
    }

    init(){
        this.trigger.forEach(item=>{
                item.addEventListener('click',(e)=>{
                    this.toggleTabs(e);
                    this.toggleContent(e);
                })
        })
    }
    toggleTabs(e){
        this.trigger.forEach(item=>{
            item.classList.remove('active');
        })
        e.target.classList.add('active');
    }
    toggleContent(e){
        this.container.querySelectorAll('.contents').forEach(item=>{
            item.classList.remove('active');
        })  
        //comparing
        const selector = e.target.getAttribute('data-target');
        console.log(selector);
        const contents = this.container.querySelector(selector);
        console.log(contents);
        contents.classList.add('active');   
    }
}

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();
//end of sec 3



//snackback
class SnackBar {
    constructor(){
        this.snackbar = document.createElement('div');
    }
    init(){
        this.snackbar.classList.add('snackbars');
        document.querySelector('body').appendChild(this.snackbar);
    }
    show(message){
        this.snackbar.textContent = message;
        this.snackbar.classList.add('active');
        setTimeout(()=>{
            this.snackbar.classList.remove('active');
        },3000)
    }
}

const snackbar = new SnackBar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click',()=>{
    snackbar.show('You pressed me!');
    scrollBy(0, 100);
})
