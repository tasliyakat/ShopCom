import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { getCartItems } from '@/utlis/cartitems'

export default function Header() {
  const [cart,setCart]=useState(0);
  useEffect(()=>{
    setInterval(()=>{
      const cartItems=getCartItems();
      setCart(cartItems.length)
    },1000)
  },[])
  return (
    <>
      <b><nav className="navbar navbar-top-bg text-black d-node d-md-block">
        <div className="container-md">
          <i className='nav-item navbar-nav'><b>PINK SUMMER SALE 50% UP TO Off</b></i>
          <div className='dropdown p-0'>
            <span className='dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'> <BiUserCircle size={25} /> Account</span>
            <ul className='dropdown-menu'>
              <li><Link className='dropdown-item' href='/register'>Register</Link></li>
              <li><Link className='dropdown-item' href='/login'>Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <b><nav className="navbar navbar-bg text-white d-md-block">
        <div className="container-md">
          <Link href="/" className='navbar-brand'>
            <Image src="/images/ilogo.png" width={150} height={60} alt="nwg logo"></Image>
          </Link>
          <Link href="/cart" className='nav-item nav-link d-flex gap-1 align-items-center text-black'>
            <span className='p-1 rounded-circle navbar-top-bg text-black'>
              <BsCart4 size={21} className="pb-1" /></span>
               {cart} items 
          </Link>
        </div>
      </nav>
      </b>
      </b>
      <nav className="navbar navbar-expand-lg shadow-sm mb-2 roumded container px-2">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ">
            <Link href="/" className='nav-item nav-link active'><b>HOME PAGE</b></Link>
            <Link href="/about-us" className='nav-item nav-link active'><b>ABOUT US</b></Link>
            <Link href="/contact" className='nav-item nav-link active'><b>Contact Us</b></Link>
            <Link href="/Support" className='nav-item nav-link active'><b>STORE</b></Link>
          </div>
        </div>
      </nav>
    </>
  )
}