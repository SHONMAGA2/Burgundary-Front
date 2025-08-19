"use client";

import React from 'react';
import Link from 'next/link';

export default function HomeLayout({children}:{children:React.ReactNode}){

return(
<>
<div className="p-4">
{children}
<p>endpoints you can use with your given token(remember it last for 5hours!. You can get a new one afterwards here. <Link href="/refresh">Refresh Token</Link>:

<ul>

<li><Link href="/shop">E-Commerce</Link></li>

</ul>
</div>
</>
)
}

