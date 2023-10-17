interface ArrowProps {
    className?: string
}

export default function Arrow({ className }: ArrowProps) {
    return (
        <div className="relative flex items-center justify-center">
            <img src="./images/arrow.png" alt="arrow" className={`${className ? className : 'w-5 h-5 sm:h-6 sm:w-6'}`} />
        </div>
    )
}