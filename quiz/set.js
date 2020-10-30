const sets = new Set();
sets.add(25);
sets.add(30).add(50);
console.log(sets);

const newset = [...sets];
console.log(newset);
const newarra = [1,2,3,4,1];
const op = [...new Set(newarra)];
console.log(op);
console.log(sets.size);
console.log(sets.has(1));
const newarray = new Set([
    {title:'HP',year:1998},
    {title:'Twilight',year:2000}
]);
newarray.forEach(({title,year}) =>{
    console.log(title,year);
})