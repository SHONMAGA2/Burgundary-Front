'use client';

import {useRef,useState} from 'react';

export default function SignUp(){

const nameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);

const [token,setToken] = useState<string | null>(null);
const [loading,setLoading] = useState(false); 

const formSubmit = async (e:React.FormEvent) =>{
e.preventDefault();
setLoading(true);

const data = {
name:nameRef.current?.value || "",
email:emailRef.current?.value || "",
password:passwordRef.current?.value || ""
};

try{
const response = await
fetch("https://burgundary-api-8dpz.onrender.com/api/SignUp",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data),
credentials:"include"
});

const json= await response.json();
console.log(json);
setToken(json.token);

}catch(error){
console.error(error);
}finally{
setLoading(false);
}

};

const copy = () =>{
if(!token) return;

navigator.clipboard.writeText(token)
.then(() => alert("Copied!"))
.catch(() => alert("Failed to copy!"));
};

return(

<div>
<h1>SignUp</h1>

<form onSubmit = {formSubmit}>
<input type="text" ref={nameRef} name="name" placeholder="enter your name"/>

<input type="email" ref={emailRef} name="email" placeholder="enter your email"/>

<input type="password" ref={passwordRef} name="password" placeholder="enter your password"/>

<button type="submit" disabled={loading}>{loading ? "Sending...":"Send"}</button>
</form>

<div>

{token &&(
<div>
 <pre> {token} </pre>
<button onClick={copy}>Copy Token</button>
</div>
)}

</div>

</div>
);
}
