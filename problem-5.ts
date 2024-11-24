

const getProperty=<X,Y extends keyof X>(object:X,property:Y)=>{
return object[property]
}

const User={
    name:'hasib',
    age:12
}
const result=getProperty(User,'name');
console.log(result);