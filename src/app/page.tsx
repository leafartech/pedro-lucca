import Arrow from "@/components/Arrow";
import Card from "@/components/Card";
import Number from "@/components/Card/Number";
import Dropdown from "@/components/Dropdown";
import HeroFlex from "@/components/HeroFlex";
import Section from "@/components/Section";
import { CalendarDaysIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <header className="overflow-hidden relative w-full sm:h-screen flex items-center justify-center bg-my2 rounded-b-[96px]">
        <div className="absolute top-0 left-0 text-center border-b border-my/80 text-my/80 w-full py-3">
          <p className="cinzel font-extrabold ">Exclusivo para quem vende serviço, consultorias, mentorias e produtos digitais</p>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-2">
            <h4 className="text-white cinzel font-bold flex items-center gap-2">
              2 dias de imersão para eu te mostrar
              <Arrow />
            </h4>
            <h1 className="title text-white">com detalhes os <span className="text-my">bastidores</span> da estrutura que utilizei para <span className="text-my">faturar R$ 1 milhão</span> nos últimos 12 meses</h1>
            <p className="text-base text-zinc-300 font-medium">Pare de comprar cursos, ouvir diquinhas no instagram e aprenda na prática a estruturar as vendas do seu negócio pelo Instagram!</p>
            <div className="flex flex-col gap-2 my-2">
              <p className="text-zinc-300 flex gap-2 font-medium">
                <CalendarDaysIcon className="h-5 w-5 text-my" />
                <span>21 e 23 de Novembro</span>
              </p>
              <p className="text-zinc-300 flex gap-2 font-medium">
                <HomeIcon className="h-5 w-5 text-my" />
                <span>São Paulo - Hotel Morumbi</span>
              </p>
            </div>
            <a href="" className="font-medium grad text-white rounded-lg py-2 px-4">Quero aumentar meu lucro mensal</a>
          </div>

          <div className="flex justify-end items-end">
            <img src="./images/bg.png" alt="Foto do Pedro Lucca" className="h-[86%]" />
          </div>
        </div>
      </header>
      <main className="pt-24 bg-zinc-100">
        <Section>
          <HeroFlex
            title="Você sente que está cada vez mais difícil de vender pelo Instagram?"
            imagePath="1"
          >
            <div className="flex flex-col gap-2 text-my2 font-medium mt-4">
              <p>Isso acontece toda vez que <strong>você tenta vender</strong> alguma coisa no <strong>Instagram</strong> ou quando está <strong>criando conteúdo</strong>. </p>
              <p>Você <strong>começa a se perguntar</strong> se está <strong>se destacando em relação aos outros</strong>, se <strong>sabe</strong> mesmo <strong>como chamar a atenção</strong> e se <strong>comunicar</strong> com o seu <strong>cliente ideal</strong>. </p>
              <p>E, não podemos esquecer, a falta de uma <strong>variedade de produtos para resolver os problemas</strong> dos seus seguidores. </p>
              <p>Isso inclui <strong>cursos pontuais</strong> com <strong>preço acessível</strong> para quem está começando e até <strong>mentorias caras</strong> que <strong>atendem por completo</strong> o seu cliente.</p>
              <p>Cada vez <strong>menos view nos stories</strong>… cada vez <strong>menos engajamento</strong>… cada vez tendo que <strong>diminuir a sua margem para vender</strong>…</p>
              <p><strong>Até quando você irá vender de uma forma desgastante, chata e ultrapassada?</strong></p>
            </div>
          </HeroFlex>
        </Section>
        <Section className="pt-24">
          <div className="flex gap-12 justify-center">
            <Card
              imagePath="1"
              special={false}
              text="Você precisa montar produtos e funis de vendas matadores."
            />
            <Card
              imagePath="2"
              special={true}
              text="Você precisa transmitir autoridade mesmo que esteja começando com pouco."
            />
            <Card
              imagePath="3"
              special={false}
              text="Você precisa se conectar com a audiência de forma rápida e genuína."
            />
          </div>
        </Section>
        <Section className="text-center py-16" classNameSection="my-24 bg-my2 rounded-[96px]">
          <div>
            <h2 className="title text-white">Veja o gráfico de <span className="text-my">crescimento de vendas</span> pela internet abaixo:</h2>
            <div className="flex justify-center w-full my-12">
              <img src="./images/graph.png" alt="Gráfico representando crescimento das vendas pela internet" className="max-w-lg" />
            </div>
            <h2 className="title text-white">Você percebe o quanto que desde o <span className="text-my">fim da pandemia</span> esse gráfico <span className="text-my">oscila</span>? Esse é o <span className="text-my">cenário</span> que provavelmente <span className="text-my">você se encontra</span>.</h2>
          </div>
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
          <div className="my-20">
            <Number
              arr={['Você vende muito bem em um momento, mas não consegue ter constância.', 'Não consegue ter previsibilidade e sustentar o seu faturamento durante o ano todo.', 'Você não tem um passo a passo de como escalar de fato o seu negócio.']}
            />
          </div>
          <div className="flex flex-col mt-12">
            <p className="text-white/40 text-xl font-medium mb-4">Hoje em dia, você só irá sobreviver vendendo na internet,</p>
            <h2 className="text-white title">Se conseguir <span className="text-my">dominar funis de vendas</span> para cada produto ou serviço que você possuir. Essa é <span className="text-my">a chave que eu utilizei</span> para <span className="text-my">faturar R$ 1 milhão</span> nos últimos 12 meses.</h2>
          </div>
          <div className="flex justify-center mt-6">
            <Arrow className="h-10 w-10" />
          </div>
        </Section>
        <Section className="">
          <HeroFlex
            imagePath="1"
            title="Eu aplico esses funis de vendas periodicamente de um jeito que eu consiga vender SEMPRE!"
          >
            <div className="font-medium flex flex-col gap-4 mt-4 text-lg">
              <ul>
                <li><strong>1. Sem desgastar</strong> a minha <strong>audiência</strong>!</li>
                <li><strong>2. Sem tomar</strong> mais do que <strong>4h do meu dia</strong>!</li>
                <li><strong>3. Sem precisar</strong> gastar rios em <strong>tráfego pago</strong>!</li>
              </ul>
              <p className="max-w-lg">E além disso tudo, eu consigo <strong>crescer o meu faturamento mês a mês</strong>.</p>
            </div>

          </HeroFlex>
        </Section>
        <Section className="py-12 my-12">
          <HeroFlex
            imagePath=""
            title="Como a imersão vai funcionar?"
            reverse={true}
          >
            <div className="flex flex-col">
              <div className="w-full flex items-start flex-col gap-3 mt-4">
                <Dropdown
                  title="A Oferta - 24 de Novembro"
                >
                  <div className="flex flex-col gap-2 font-medium">
                    <p>⚜️ Benchmarking - Como modelar seus concorrentes para se tornar a melhor do seu mercado</p>
                    <p>⚜️ Perfil de Cliente Ideal X Cliente Que Não Quero - Sem enrolação, vamos definir o público que vocês quer comunicar e afastar completamente os que você não quer!</p>
                    <p>⚜️ A Escada de Valor - Que produtos e serviços preciso ter para faturar R$100.000 ou mais</p>
                    <p>⚜️ Criação da Oferta Única Irrecusável - Os pilares de uma oferta que impossível de ser ignorada pelo seu cliente ideal</p>
                  </div>
                </Dropdown>
                <Dropdown
                  title="O Expert- 26 de Novembro"
                >
                  <div className="flex flex-col gap-2 font-medium">
                    <p>⚜️ A melhor maneira de não conseguir vender nada - A verdade do seu produto</p>

                    <p>⚜️ O Segredo da Autoridade - Como players sem autoridade chegam ao topo manipulando a percepção da audiência</p>

                    <p>⚜️ A tríade da Conexão - Os 3 pilares para criar uma conexão genuína rápido com as pessoas</p>
                  </div>
                </Dropdown>
                <Dropdown
                  title="Funis de venda - 28 de Novembro"
                >
                  <div className="flex flex-col gap-2 font-medium">
                    <p>⚜️ Os 7 passos essenciais de todo funil de vendas - Como funciona um funil de vendas</p>

                    <p>⚜️ Como Hackear os funis de vendas dos seus concorrentes - Como usar a experiência dos seus concorrentes para vender mais rápido</p>

                    <p>⚜️ Os 4 funis de vendas que eu aplico no meu negócio e me trazem mais de R$100.000 todos os meses</p>
                  </div>
                </Dropdown>
              </div>
            </div>
          </HeroFlex>
        </Section>
      </main>
      <footer></footer>
    </>
  )
}