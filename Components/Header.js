import React from 'react'
import Image from 'next/image'
import {useState} from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import {useRouter} from 'next/dist/client/router'

function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState("")
    const router = useRouter()

    const search = () => {
        if(searchInput.length !==0){
            router.push({
                pathname:"/search",
                query:{
                    location:searchInput
                }
            })
        }
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md p-5 md:px-109 grid grid-cols-3">
            {/* left side header */}
            <div className="relative h-10 cursor-pointer my-auto items-center flex">
                <Image src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left" />
            </div>
            {/* middle search */}
            <div className="flex items-center text-gray-600bpy-2 rounded-full md:shadow-sm text-sm placeholder-gray-400 md:border-2">
                <input value={searchInput} onChange={e=>setSearchInput(e.target.value)} className="flex-grow bg-transparent pl-5 outline-none" type="text" placeholder={ placeholder || "Start your search" } />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 md:mx-2" onClick={search} />
            </div>
            {/* right side header */}
            <div className="flex text-gray-500 space-x-4 items-center justify-end">
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header
