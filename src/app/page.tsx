'use client'

import Image from 'next/image'

import logo from '@/assets/logo-branca.png'
import doutor from '@/assets/perfil.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faArrowDown, faDumbbell, faD } from '@fortawesome/free-solid-svg-icons'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import TriangleDown from '@/components/TriangleDown'
import TriangleUp from '@/components/TriangleUp'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.css" />
      </Head>
      
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.js"
        onLoad={() => {
          new fullpage("#fullpage", {
            autoScrolling: true,
            scrollHorizontally: true,
            navigation: true
          })
        }}
      />
      
      <Container id="fullpage">
        <main className='bg-image min-h-[90vh]'>
          <Section className="section" color={null}>
            <div className="max-w-[1140px] mx-auto">
              <div className='pt-[180px] pb-[120px] flex justify-center items-center flex-col gap-y-4'>
                <Image
                  src={logo}
                  width={350}
                  height={350}
                  alt='logo-drfabiopizzini'
                  priority
                >
                </Image>

                <div className='px-[220px] text-center	'>
                  <p className='sm:text-[60px] text-[30px] font-bold leading-[71px]'>
                    Emagrecimento Saudável, Longevidade, Alta Performance e Qualidade de Vida<span className='text-[#6cdc03]'>.</span>
                  </p>
                </div>

                <div className=''>
                  <a className='flex gap-x-1 text-[1rem] font-medium' href="">
                    <FontAwesomeIcon className='w-4' icon={faChevronDown} style={{color: "#6cdc03",}} />
                    Clique no botão e agende seu atendimento Online ou Presencial
                  </a>
                </div>

                <Button icon={faArrowDown}/>

              </div>
            </div>
          </Section>
        </main>

        <Section className="section" color='black'>
          <div className="md:max-w-[1140px] mx-auto px-[22px]">
            <div className='pt-[158px] pb-[120px] flex items-center flex-col gap-y-4'>

              <div className='w-[100%] text-left leading-[60px]'>
                <h1 className='text-[50px] font-bold'>Em que <span className='text-[#6cdc03]'>posso ajudar?</span></h1>
                <p className='text-[26px] font-medium'>Essas são as minhas especialidades</p> 
              </div>

              <div className='columns-3 flex flex-row lg:gap-x-8 gap-x-3'>
                <Card 
                  title={'Emagrecimento Definitivo'}
                  text={'Plano desenvolvido de acordo com as necessidades individuais de cada pessoa'}
                  icon={faDumbbell}
                  className='mt-28'
                />
                <Card 
                  title={'Saúde'}
                  text={'Eu irei fornecer a você uma nutrição cuidadosamente planejada e a acompanhar você em cada etapa deste caminho para promover sua saúde e bem-estar.'}
                  icon={faDumbbell}
                  className='mt-12 mb-14'
                />
                <Card 
                  title={'Alta Performance Individual'}
                  text={'Através de técnicas de treinamento personalizadas e uma alimentação adequada, estou aqui para te auxiliar a maximizar o seu potencial.'}
                  icon={faDumbbell}
                  className='mt-28'
                />
              </div>
            </div>
          </div>
        </Section>

        <Section className="section" color='white'>
          <TriangleDown />

          <div className='md:max-w-[1140px] mx-auto text-center flex flex-col justify-between items-center gap-y-6 px-[250px] pt-[120px] pb-[88px]'>
            <h1 className='text-[60px] font-bold leading-[69px]'><span className='text-[#6cdc03]'>Marque</span> agora uma consulta</h1>
            <p className='text-[26px] font-medium leading-[39px]'>Seja online ou presencial, agende seu atendimento. <span className='font-extrabold'>Eu vou te acompanhar de perto!</span></p>
          
            <Button icon={faArrowDown}/>
          </div>

          <TriangleUp />
        </Section>

        <Section className="section" color={'black'}>

          <div className='flex flex-flow items-center justify-between md:max-w-[1140px] mx-auto px-[22px] pb-40'>

            <div className='basis-1/2'>
              <div className='text-[59px] font-bold leading-[70px] text-left mb-8'>
                <h1>Conheça</h1>
                <h1>Dr. Fábio Pizzini<span className='text-[#6cdc03]'>.</span></h1>
              </div>

              <div className='text-[20px] font-medium leading-[34px] text-left grid gap-y-10'>
                <p>
                  Nascido em Sorocaba, Fábio Pizzini tem XX anos e uma longa carreira dedicada a nutrologia e cuidado com seus pacientes.
                </p>

                <p>
                  Formado em Medicina pela Pontifícia Universidade Católica de São Paulo – PUC/SP. Pós Graduação em Nutrologia pela Associação Brasileira de Nutrologia – ABRAN.
                </p>

                <p>
                  Atualmente são mais de mil pacientes ativos distribuídos entre atendimento presencial em Sorocaba. Membro da Associação Brasileira de Nutrologia – ABRAN.
                </p>
              </div>
            </div>

            <div>
              <Image src={doutor} width={288} height={200} alt='Dr. Fábio Pizzini' priority className='rounded-3xl basis-1/2 ml-auto scale-x-[-1]' />
            </div>

          </div>

        </Section>

        <Section className="section" color='white'>
          <div>
            <div className="elfsight-app-72e57e95-a44c-4d65-bbca-d8c138107d38"></div>
          </div>
        </Section>

      </Container>
    </>
  )
}
