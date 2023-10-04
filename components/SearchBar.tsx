import React from 'react'
import {Button} from "@nextui-org/button";
import {SearchIcon} from "@/components/icons";
import { Input } from "@nextui-org/input";
const SearchBar = () => {
  return (
    <div>
        <div className='flex items-center bg-gray-100 p-2 rounded-full max-md:hidden'>
            <Input
                aria-label="Search"
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm",
                }}
                labelPlacement="outside"
                placeholder="Search..."
                startContent={
                    <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
            />
        </div>
    </div>
  )
}

export default SearchBar