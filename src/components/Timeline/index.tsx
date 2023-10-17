export default function Timeline() {
    return (
        <div className="w-full max-w-[724px] pb-12 sm:pb-0 sm:h-[476px] relative flex flex-col sm:flex-row items-center">
            <div className="sm:absolute top-0 left-0 text-white">
                <div className="bg-my rounded-full h-12 w-12 relative flex justify-center items-center font-bold text-2xl after:rounded-b-full after:absolute after:-bottom-16 after:h-16 after:w-1 after-radial">1</div>
                <h5 className="border-l-2 border-my/60 ms-[22px] cinzel font-bold text-lg sm:text-xl max-w-[340px] ps-4 mt-0">Você aprenderá a <span className="text-my">minha estrutura</span> de vendas</h5>
            </div>
            <img src="./images/map/1.png" alt="Mapa" className="absolute hidden sm:block top-[24px] w-[572px] left-[48px]" />
            <div className="sm:absolute right-[-150px] top-[230px] text-white">
                <div className="bg-my rounded-full h-12 w-12 relative flex justify-center items-center font-bold text-2xl after:rounded-b-full after:absolute after:-bottom-16 after:h-16 after:w-1 after-radial">2</div>
                <h5 className="border-l-2 border-my/60 ms-[22px] cinzel font-bold text-lg sm:text-xl max-w-[340px] ps-4 mt-0">Você aprenderá as <span className="text-my">12 estratégias</span></h5>
            </div>
            <img src="./images/map/2.png" alt="Mapa" className="absolute hidden sm:block bottom-[90px] w-[496px] left-[68px]" />
            <div className="sm:absolute bottom-0 left-12 text-white">
                <div className="bg-my rounded-full h-12 w-12 relative flex justify-center items-center font-bold text-2xl after:rounded-b-full after:absolute after:-bottom-16 after:h-16 after:w-1 after-radial">3</div>
                <h5 className="border-l-2 border-my/60 ms-[22px] cinzel font-bold text-lg sm:text-xl max-w-[340px] ps-4 mt-0">Você aprenderá a <span className="text-my">criar novos produtos</span></h5>
            </div>
        </div>
    )
}