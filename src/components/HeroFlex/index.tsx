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
        <div className={`flex flex-col sm:flex ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
            <div className="flex flex-col w-1/2">
                <h2 className={`font-extrabold cinzel text-3xl ${bg ? 'text-white' : 'text-my2'}`}>{title}</h2>
                {children}
            </div>
            <div className={`flex w-1/2 ${reverse ? 'justify-start' : 'justify-end'}`}>
                <img src={`./images/hero/${imagePath}.png`} alt={title} />
            </div>
        </div>       
    )
}