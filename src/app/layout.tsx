"use client";

import React from 'react';

async function Data(){
try{
const response = await fetch("https://burgundary-api-8dpz.onrender.com/api/SignUp");

if(!response.ok) throw new Error(`HTTP Error could not retrieve data: ${response.status}`);

const data = response.json();
const cleanData = JSON.stringify(data,null,2);
return cleanData;

}catch(error){
console.error("Something went wrong",error.message);
}
}

export default function homeLayout({children}:{children:React.ReactNode}){
return(
<>
Data()
<div className="p-4">
{children}

<div className = " display">

</div>
{cleanData}
</div>
</>
)
}
