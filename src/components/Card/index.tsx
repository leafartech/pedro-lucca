interface CardProps {
    special: boolean
    imagePath: string
    text: string
}

export default function Card({ imagePath, special, text }: CardProps) {
    return (
        <div className={`max-w-xs py-20 px-4 flex flex-col items-center justify-center text-center gap-3 ${special ? 'grad-2' : ' border-4 border-my '} rounded-2xl`}>
            <img src={`images/icons/${imagePath}.png`} alt={text} className="w-10 h-10" />
            <h3 className={`font-extrabold cinzel ${special ? 'text-white' : 'text-my2'}`}>{text}</h3>
        </div>
    )
}