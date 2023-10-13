import Arrow from "@/components/Arrow";
import HeroFlex from "@/components/HeroFlex";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";

export default function Mentoria() {
    return (
        <div className="bg-my2">
            <header className="relative overflow-hidden w-full sm:h-screen flex items-center justify-center">
                <div className="absolute top-0 left-0 text-center border-b border-my/80 text-my/80 w-full py-3">
                    <p className="cinzel font-extrabold ">Exclusivo para quem vende serviço, consultorias, mentorias e produtos digitais</p>
                </div>
                <div className="w-full max-w-7xl grid grid-cols-2">
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h4 className="text-white cinzel font-bold flex items-center gap-2">
                            50 minutos sozinho comigo no zoom
                            <Arrow />
                        </h4>
                        <h1 className="title-2 text-white">É o suficiente para <span className="text-my">eu analisar</span> o que está te <span className="text-my">impedindo</span> de <span className="text-my">faturar 100 mil</span> por mês.</h1>
                        <p className="text-lg text-zinc-300 font-medium my-2">Irei mostrar as 12 estratégias que utilizei para faturar R$ 1 milhão nos últimos 12 meses!</p>
                        <a href="" className="font-medium grad text-white rounded-lg py-2 px-4">Quero concorrer a análise e conhecer as 12 estratégias</a>
                    </div>
                    <div className="flex justify-end items-end">
                        <img src="./images/bg.png" alt="Foto do Pedro Lucca" className="h-[86%]" />
                    </div>
                </div>
                <div className="absolute bottom-0 flex justify-center">
                    <Arrow className="h-10 w-10" />
                </div>
            </header>
            <main className="pt-24">
                <Section>
                    <HeroFlex
                        title="Você sente que está cada vez mais difícil de vender pelo Instagram?"
                        imagePath=""
                        bg={true}
                    >
                        <div className="flex flex-col gap-2 text-zinc-300 font-medium mt-4">
                            <p>Isso acontece toda vez que você tenta vender alguma coisa no Instagram ou quando está criando conteúdo.</p>
                            <p>Você começa a se perguntar se está se destacando em relação aos outros, se sabe mesmo como chamar a atenção e se comunicar com o seu cliente ideal.</p>
                            <p>E, não podemos esquecer, a falta de uma variedade de produtos para resolver os problemas dos seus seguidores. Isso inclui cursos pontuais com preço acessível para quem está começando e até mentorias caras que atendem por completo o seu cliente.</p>
                            <p>Cada vez menos view nos stories… cada vez menos engajamento… cada vez tendo que diminuir a sua margem para vender…</p>
                            <p>Até quando você irá vender de uma forma desgastante, chata e ultrapassada?</p>
                        </div>

                    </HeroFlex>
                </Section>
                <Section className="pt-24">
                    <div className="flex justify-center">
                        <div className="max-w-3xl flex justify-center flex-col">
                            <h2 className="title text-white font-bold text-center">Você precisa de <span className="text-my">diferentes estratégias</span> para continuar vendendo sempre!</h2>
                            <div className="flex justify-center w-full mt-20 mb-28">
                                <svg className="max-w-4xl" xmlns="http://www.w3.org/2000/svg" width="816" height="2" viewBox="0 0 816 2" fill="none">
                                    <path d="M0 1H816" stroke="url(#paint0_radial_33_163)" stroke-width="2" />
                                    <defs>
                                        <radialGradient id="paint0_radial_33_163" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(408 1.5) rotate(90) scale(0.5 408)">
                                            <stop offset="0.360416" stop-color="#FBBF24" />
                                            <stop offset="1" stop-color="#FBBF24" stop-opacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center gap-3 text-zinc-300">
                                <p>Hoje em dia, você só irá sobreviver vendendo na internet, se conseguir criar diferentes produtos, para diferentes pessoas e vendendo com estratégias específicas e diferentes em cada situação.</p>
                                <p>Essa é a chave na qual eu utilizei para faturar R$ 1 milhão nos últimos 12 meses.</p>
                                <p>Eu transformei essas estratégias em passos que repito em determinados ciclos [Desenho chave-fechadura] em períodos específicos e faço com que a minha audiência não se canse de me ver, não se canse de querer comprar os meus produtos e sempre queira evoluir no meu funil de vendas.</p>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className="flex justify-center mt-12">
                    <Timeline />
                </Section>
                <Section className="mt-16 flex justify-center">
                    <div className="flex justify-center">
                        <div className="max-w-3xl flex justify-center flex-col">
                            <h2 className="title text-white text-3xl text-center font-bold">Eu <span className="text-my">apliquei essas estratégias</span> no meu perfil e no perfil da Gi</h2>
                        </div>
                    </div>
                </Section>
            </main>
            <footer></footer>
        </div>
    )
}