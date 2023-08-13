"use client"

import React from 'react';
import {twMerge} from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import {useRouter} from "next/navigation";
import {HiHome, HiSearch} from "react-icons/hi";
import Button from "@/components/Button";
interface HeaderProps {

    children: React.ReactNode;
    className?: string;
}

const Header :React.FC<HeaderProps> = ({
    children,
    className
                                       }) => {

    const router = useRouter();

    return (
        <div className={twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-900
            p-6`,
             className
            )}>
            <div className='w-full mb-4 flex items-center justify-between'>
                <div className='hidden md:flex gap-x-2 items-center'>
                    <button
                        onClick={() => router.back()}
                        className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
                        <RxCaretLeft className='text-white' size={35}/>
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
                        <RxCaretRight className='text-white' size={35}/>
                    </button>
                </div>

                <div className='flex md:hidden gap-x-2 items-center'>
                    <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                        <HiHome size={20} className='text-black'/>
                    </button>
                    <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                        <HiSearch size={20} className='text-black'/>
                    </button>
                </div>

                <div className='flex justify-center items-center gap-x-4'>
                    <>
                        <div>
                            <Button className='bg-transparent text-neutral-300 font-medium'>
                                Sign up
                            </Button>
                        </div>
                    </>
                    <div>
                        <Button className='bg-white px-6 py-2' onClick={()=> {

                        }}>
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
            {children}
        </div>

    )
};

export default Header;