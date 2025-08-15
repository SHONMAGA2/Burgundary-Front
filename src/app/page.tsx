'use client';

import {useRef,useEffect} from 'react';

export default async function login(){

const nameRef = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null);



useEffect(() =>{

let data: {
name:string,
email:string,
password:string
};


const Name =  nameRef.current.value;
const Email = emailRef.current.value;
const Password = password.current.value;

data = {
name:Name,
email:Email,
password:Password
};

await fetch("https://burgundary-api-8dpz.onrender.com/SignUp"{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data),
credentials:"include"
})
.then((response) =>{
const token = response.data.token;
})

.catch((error) =>{
console.error(error);
});

return token;

},[]);

const copy = () =>{
navigator.clipboard.writeText(token)
.then(() => alert("Copied!"))
.catch(() => alert("Failed to copy!"));
};

return(

<div>
<h1>SignUp</h1>

<form id="form input">
<input type="text" ref={nameRef} name="name" placeholder="enter your name"/>

<input type="email" ref={emailRef} name="email" placeholder="enter your email"/>

<input type="password" ref={passwordRef} name="password" placeholder="enter your password"/>

<button type="submit">Send</button>
</form>

<div ref={loadOut}>

{token &&(
<>
 <pre> {token} </pre>
<button onClick={copy}>Copy Token</button>

)}

</div>

</div>
);
}
