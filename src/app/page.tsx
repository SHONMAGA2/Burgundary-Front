

export default function login(){
return(
<>
<h1>Login</h1>
<form action="https://burgundary-api-8dpz.onrender.com/API/login" method="POST">
<input type="text" name="name" placeholder="enter your name"/>
<input type="email" name="email" placeholder="enter your email"/>
<input type="password" name="password" placeholder="enter your password"/>
</form>
</>
);
}
