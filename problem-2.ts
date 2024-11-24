let arr=[1,2,3,3,4,5,6,6];
const removieDuplicate=(arr:number[]):number[]=>{
return arr.filter((item,index)=>arr.indexOf(item)===index);

}
console.log(removieDuplicate(arr));