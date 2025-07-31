"use client";

import React from 'react';
import Button from '@/components/button';


export default function homeLayout({children}:{children:React.ReactNode}){
return(
<>
<Button />
<div className="p-4">
{children}
</div>
</>
)
}
