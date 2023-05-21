import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'

export default function ThankYou() {
    const router = useRouter();
    console.log('router', router.query)
    return (
        <div>
            <Image src="/images/s.webp" className="d-block w-100" width={1080} height={803} alt="thankyou" />
        </div>
    )
}
