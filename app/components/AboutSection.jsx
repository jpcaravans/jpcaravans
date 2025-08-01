"use client"

import Head from 'next/head';


function AboutSection() {
  
   return (
    <>
    <Head>
        <meta
          content="Herzlich Willkommen bei JP Caravans! 
          Wir sind dein Partner im Bereich des autarken Campens und weiterem Zubehör für deinen Wohnwagen, Wohnmobil oder Van in der Region Gifhorn, Wolfsburg und Braunschweig."
        />     
        <title>JP Caravans dein Profi für Nachrüstungen von Movern Solaranlagen und mehr</title>
      </Head>
    <section className="flex justify-center text-white xl:pb-20" id="about">
    <div className="gap-8 flex items-center justify-center px-4
    lg:w-[850px] lg:h-[450px]
    xl:w-[1550px] xl:h-[550px]
    xl:px-16 ">
        <div className=" text-left flex flex-col justify-center xl:mt-10 xl:pt-16 mt-12 pt-2">
        <h2 className=" md:text-4xl lg:text-5xl text-4xl font-bold text-white flex justify-center pl-2 pr-4 mr-2">Herzlich</h2>
        <h2 className=" md:text-4xl lg:text-5xl text-4xl font-bold text-white flex justify-center pl-2 pb-6 pr-4">Willkommen</h2>
        <p className='text-white text-xl lg:text-2xl xl:mt-12'> bei JP Caravans! Wir sind dein Partner im Bereich des autarken Campens und weiterem Zubehör für deinen Caravan. 
        <br/>
        <br/>
        Egal ob Wohnwagen, Wohnmobil oder Van – mit uns erschaffst du deinen ganz persönlichen Campertraum. Ob du einen Mover nachgerüstet haben möchtest oder dein Camper komplett autark werden soll – bei uns erhältst du alles, was du für deinen Caravan brauchst!
        <br/>
        <br/>
        Ich bin Julian, ein seit Jahren begeisterter Camper, der seine eigenen Camper schon individuell gestaltet hat. Da ich Kfz-Meister bin und auf jahrelange Berufserfahrung zurückblicken kann, ist dein Camper bei mir in besten Händen!
        </p>
        </div>   
        </div>  
    </section>
    </>
  )
}

export default AboutSection