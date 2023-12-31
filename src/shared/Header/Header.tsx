import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
    return (
        <header className='w-full h-16 bg-[#1BBFA0] flex justify-between items-center px-4 sticky top-0 z-10'>
            <Link href={'/'}><h1 className='text-xl font-medium text-white'>Plant Search Portal</h1></Link>
        </header>
    )
}

export default Header