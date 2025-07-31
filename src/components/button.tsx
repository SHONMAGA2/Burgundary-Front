"use client";

import {useState} from "react";

const Button = () =>{
const {count,setCount} = useState(0);

return(
<div>
<p>{count}</p>
<button onClick={() => setCount(count + 1)}>Count</button>
</div>
);
};

export default Button;
