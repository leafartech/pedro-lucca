'use client'

import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { ReactNode, useState } from "react"

interface DropdownProps {
    children: ReactNode
    title: string
}

export default function Dropdown({ children, title }: DropdownProps) {
    const [ dropdown, setDropdown ] = useState<boolean>(false)

    return (
        <div className="w-full max-w-lg">
            <div className="flex" onClick={() => setDropdown(!dropdown)}>
                <h4 className="flex gap-2 justify-between items-center text-my2 cinzel font-extrabold cursor-pointer border-b border-my2 py-2 w-full max-w-lg">
                    <span>{title}</span>
                    <ChevronDownIcon className={`w-6 h-6 text-my2 transition ${dropdown ? 'rotate-0' : '-rotate-90'}`} />
                </h4>
            </div>
            <div className={`mt-4 ${dropdown ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}