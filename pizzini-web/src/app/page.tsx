import Image from 'next/image'
import logo from '../../public/vercel.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className='xl:container mx-auto px-4'>
      <section className='flex justify-center items-center flex-col min-h-screen gap-y-4'>

        <Image
          src={logo}
          width={100}
          height={100}
          alt='logo-drfabiopizzini'
          priority
        >
        </Image>

        <div>
          <h1>Emagrecimento Saudável,</h1>
          <h1>Longevidade, Alta</h1>
          <h1>Performance e Qualidade</h1>
          <h1>Vida<span>.</span></h1>
        </div>

        <div className='w-4'>
          <a href="flex">
            <FontAwesomeIcon icon={faChevronDown} size="2xs" style={{color: "#6cdc03",}} />
            Clique no botão e agende seu atendimento Online ou Presencial
          </a>
        </div>

        <div className=''>
          <a 
            className='flex w-4'
            href=''
          >
            <FontAwesomeIcon className='w-1' icon={faArrowDown} size="2xs" style={{color: "#000000",}} />
            Agendar Consulta
          </a>
        </div>

      </section>
    </main>
  )
}
