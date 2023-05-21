import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { HiHome } from 'react-icons/hi'
import {AiOutlineArrowLeft } from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function Breadcumb({title}) {

    const router=useRouter();
    console.log('router',router);
    
    return (
        <div className='my-2 navbar-top-bg d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-1'>
                <div className='mx-2 d-flex align-items-center'>
                    <Link href="/" className='text-decoration-none'>
                        <HiHome size={30} color='black'/>
                    </Link>
                    <AiOutlineArrowRight size={30} />
                </div>
                <h4 className='text-center py-2 text-uppercase'>{title}</h4>
        
            </div>
            <div className='px-2 align-items-center'>
                <Link href="#" className='text-decoration-none ' style={{color:'rgb(226, 10, 154)'}} onClick={()=>router.back()}>
                    <AiOutlineArrowLeft size={30} color='black'/>
                </Link>
            </div>
        </div>
    )
}