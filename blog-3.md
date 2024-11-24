the type guard checking the type of a value at 
runtime and narrowing its type in a conditional block.
type guard easy the code writing and protect the error.
The typescript project use type guard the code use 


type StudentUser={
    name:string;
}
type AdminUser={
    name:string;
    role:'admin
}
const getUser=(user:StudentUser | AdminUser)=>{
    if('role' in user){
        console.log('the admin user')
    }else{
        console.log('normal manush')
    }
}