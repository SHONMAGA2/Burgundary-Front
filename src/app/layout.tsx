"use client";

import React,{useEffect,useState} from 'react';

export default function homeLayout({children}:{children:React.ReactNode}){

const [cleanData,setCleanData] = useState<string>("fetching data...");

useEffect(() => {
async function Data(){
try{
const response = await fetch("https://burgundary-api-8dpz.onrender.com/api/SignUp");

if(!response.ok) throw new Error(`HTTP Error could not retrieve data: ${response.status}`);

const data = await response.json();
const cleanData = JSON.stringify(data,null,2);

setCleanData(cleanData);


}catch(error){
console.error("Something went wrong",error.message);
setCleanData("Could not fetch data +_+");
}
}

Data()
},[]);

return(
<>
<div className="p-4">

{children}

<div className = " display">

</div>
{cleanData}
</div>
</>
)
}
