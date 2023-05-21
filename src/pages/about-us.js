import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <div style={{
            backgroundImage: `url("/images/1414278.jpg")`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
        }}>
            <Image src='/images/a1.png' className="d-block w-100 navbar-bg" width={978} height={97} alt='' />
            <div className='mt-4'>
                <p>ShopCom brings together a wide assortment of good quality and value- priced merchandise on its platform.
                    ShopCom's vision is to enable the shoppers of Bharat experience the joy of living their aspirations through
                    reliable, value-for-money shopping. With a personalized, multilingual interface and cutting edge technology,
                    ShopCom has simplified the shopping experience for its value-conscious buyers by showcasing the most relevant
                    products- products that are a good functional fit with their needs and of a quality that lasts- thereby delivering
                    true value to its customers. With its commitment to high service standards, ShopCom suppliers operate under a
                    well structured ecosystem that enables them to offer great quality products at affordable prices.
                </p>
                <p>With majority of the value-seeking, middle-income, price-conscious buyers coming from the non-metros,
                    ShopCom’s logistics networks powered by third party logistics cover more than 96% of India’s pin codes
                    enabling order deliveries to more than 2500 towns and cities and expanding.
                </p>
                <p>Further, ShopCom's mission is to become India’s value lifestyle omni-channel leader. We are excited about
                    continuing to build a complete ecosystem around value commerce, where we can serve 'Bharat' consumers wherever
                    they are on their offline to online shopping journey.
                </p>
            </div>
            <Image src='/images/aboutl.png' className="d-block w-100 mt-5" width={1246} height={206} alt='' />
        </div>
    )
}