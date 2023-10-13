interface NumberProps {
    arr: string[]
}

export default function Number({ arr }: NumberProps) {
    return (
        <ul className="flex items-center justify-center gap-12">
            {arr.map((item, index) => (
                <li className="relative max-w-xs text-center flex items-center justify-center pt-12" key={index}>
                    <span className="absolute top-[-64px] text-[100px] text-white/30 font-bold">{index+1}°</span>
                    <p className="text-white font-medium text-lg">{item}</p>
                </li>
            ))}
        </ul>
    )
}