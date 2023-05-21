import Banner from '@/components/Banner'
import ProductCart from '@/components/cards/ProductCart'
import Breadcumb from '@/components/layout/Breadcumb'
import Head from 'next/head'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <div className='my-2 '>
          <h4 className='text-center p-2 text-uppercase navbar-top-bg '>Products</h4>
        </div>

        <div className='row'>
          {products && products.map((items) => {
            return (
              <div key={items.id} className='col-md-4'>
                <div className='mt-4'>
                  <ProductCart product={items} />
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  let products = [];
  try {
    const response = await fetch('https://dummyjson.com/products');
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