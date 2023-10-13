interface ArrowProps {
    className?: string
}

export default function Arrow({ className }: ArrowProps) {
    return (
        <div className="relative flex items-center justify-center">
            <img src="./images/arrow.png" alt="arrow" className={`${className ? className : 'h-6 w-6'}`} />
        </div>
    )
}