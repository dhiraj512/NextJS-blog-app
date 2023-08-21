import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (<>
        <nav className='flex items-center justify-between py-6'>

            <Link href={'/'}>
                <div className="flex items-center cursor-pointer">
                    <span className="font-semibold ml-2 text-md text-primary">
                        Strapi Blog
                    </span>

                </div>
            </Link>

            <ul className='flex items-center gap-5'>
                <li className="font-medium  hover:bg-primary hover:bg-opacity-40 rounded-sm px-1 text-gray-500">
                    <a href="#">Products</a>
                </li>
                <li className=" font-medium  hover:bg-primary hover:bg-opacity-40 rounded-sm px-1 text-gray-500">
                    <a href="#">Pricing</a>
                </li>
                <li className=" font-medium  hover:bg-primary hover:bg-opacity-40 rounded-sm px-1 text-gray-500">
                    <a href="#">Docs</a>
                </li>

            </ul>

        </nav>
    </>
    )
}

export default Navbar