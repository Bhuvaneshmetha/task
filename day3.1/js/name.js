const obj = {
    name: 'jhon',
    age : 3
}
let keys = Object.keys(obj);
console.log(keys);
for (let key of keys){
    console.log(key,obj[key])
}
for (let key in obj){
    console.log(key,obj[key])
}  
console.log(obj.name,obj.age)
console.log(obj.age,obj.name)