"use client";

import React,{useEffect,useState} from 'react';

interface SignUp {
message:string,
token:string

}

export default function HomeLayout({children}:{children:React.ReactNode}){

const [data,setData] = useState<SignUp | null>(null);

useEffect(() => {
async function getData():Promise<void>{
try{
const request =
 await 
fetch("https://burgundary-api-8dpz.onrender.com/api/SignUp",{
method:"GET",
credentials:"include"
});

if(request.ok){
const data:SignUp = await request.json();
setData(data);
}

}catch(error){

if (error instanceof Error){
console.error("Something went wrong",error.message);

}
else{
console.error("Something went wrong",error);
}
}
}

getData();

},[]);

return(
<>
<div className="p-4">

{children}
<div className = " display">
</div>

{data && (
<>
<p>Account Created!, copy your token below</p>
<pre>{data.token}</pre>
</>
)}
</div>
</>
)
}

