const countWordOccurrences=(sentence:string,word:string):number=>{
const convertWord=sentence.toLowerCase().split(' ');
return convertWord.filter(w=>w===word.toLowerCase()).length
}
const wordCount=countWordOccurrences('I love typescript this is my new project',"project");
console.log(wordCount);