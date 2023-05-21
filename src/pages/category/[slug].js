import ProductCart from '@/components/cards/ProductCart';
import Breadcumb from '@/components/layout/Breadcumb';
import { useRouter } from 'next/router'
import React from 'react'

function CategoryProducts({ products }) {
  const router = useRouter();
  const categoryName = router?.query?.slug;
  return (
    <>
      <head>
        <title>{categoryName}</title>
      </head>
      <main className='mb-4'>
        <Breadcumb title={`${categoryName?.toLocaleLowerCase()}- Products`} />
        <div className="row">
          {
            products && products.map((items) => {
              return (
                <div key={items.id} className='col-md-4 mt-4'>
                  <ProductCart product={items} />
                </div>
              )
            })}
        </div>
      </main>
    </>

  )
}

export default CategoryProducts

export async function getServerSideProps(context) {
  const category = context.params.slug;
  let products = [];
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const result = await response.json();
    products = result.products;
  } catch (error) {
    console.error(error)
    return { notFound: true }
  }
  return {
    props: {
      products
    }
  }
}