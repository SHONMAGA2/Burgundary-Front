"use client";

import React from 'react';

export default function homeLayout({children}:{children:React.ReactNode}){
return(
<>
<div className="p-4">

{children}
</div>
</>
)
}
