import Link from 'next/link'
import React from 'react'
import { TiThMenu } from 'react-icons/ti'
import { FcTouchscreenSmartphone } from 'react-icons/fc'
import useSwr from 'swr'
import { fetcher } from '@/utlis/swrFetcher'

export default function SideBar() {

  //const catagories=[1,2,3,4,5,6];

  const { data, error, isLoading } = useSwr('https://dummyjson.com/products/categories', fetcher);
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>



  return (
    <div className='w-100'>
      <ul className='list-group'>
        <li className='list-group-item d-flex align-items-center navbar-top-bg'>
          <h5 className='text-white mt-2 text-uppercase'>
            <TiThMenu size={20} className='' />Catagories</h5>
        </li>
        {
          data.map((category, i) => {
            return (
              <Link key={i} href={`/category/${category}`} className="text-decoration-none">
                <li className='list-group-item list-group-item-action d-flex align-items-center text-uppercase'>
                  <FcTouchscreenSmartphone size={25} className='m-2' />
                  {category}
                </li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}