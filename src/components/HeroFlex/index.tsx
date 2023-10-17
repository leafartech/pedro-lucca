import { ReactNode } from 'react'

interface HeroFlexProps {
    title: string
    children: ReactNode
    imagePath: string
    reverse?: boolean
    bg?: boolean
}

export default function HeroFlex({ children, imagePath, title, reverse, bg }: HeroFlexProps) {
    return (
        <div className={`px-4 sm:px-0 flex flex-col sm:flex-row items-center ${reverse ? 'sm:flex-row-reverse' : 'flex-col sm:flex-row'}`}>
            <div className="flex flex-col sm:w-1/2">
                <h2 className={`font-extrabold cinzel text-2xl sm:text-3xl ${bg ? 'text-white' : 'text-my2'}`}>{title}</h2>
                {children}
            </div>
            <div className={`pt-6 sm:pt-0 flex sm:w-1/2 ${reverse ? 'justify-start' : 'justify-end'}`}>
                <img src={`./images/hero/${imagePath}.png`} alt={title} />
            </div>
        </div>       
    )
}