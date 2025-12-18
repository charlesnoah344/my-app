import Image from "next/image";

import { addInfo, getInfos, removeInfo, editInfo } from '@/lib/info'


export default async function BlogApp() {
  const posts = await getInfos()
  return (
  
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 max-w-5xl mx-auto">
      <h1 className="text-center text-3xl my-0 sm:text-3xl md:text-4xl"> Formulaire de reservation </h1>
      <form action={addInfo} className="flex flex-col">
        <label className="text-center text-3xl my-0 sm:text-3xl md:text-4xl">
          Nom 
          <input placeholder="Entrer votre nom" className="border w-60 h-10 text-base my-8 sm:text-base md:text-base" name="nom" ></input>
        </label>
        <label className="text-center text-3xl my-0 sm:text-3xl md:text-4xl">
          GSM
          <input placeholder="Entrer votre numéro de téléphone" className="border w-60 h-10 text-base my-8 sm:text-base md:text-base" name="gsm" ></input>
        </label>
        <label className="text-center text-3xl my-0 sm:text-3xl md:text-4xl">
           Nombre
          <input placeholder="Entrer le nombre de personne" className="border w-60 h-10 text-base my-8 sm:text-base md:text-base" name="number" ></input>
        </label>
        <label className="text-center text-3xl my-0 sm:text-3xl md:text-4xl">
          Heure
          <input placeholder="Entrer l'heure d'arrivée" className="border w-60 h-10 text-base my-8 sm:text-base md:text-base" name="hour" ></input>
        </label>
        <button className="px-4 py-2 rounded-md font-medium text-blue-600 border-2 border-blue-600/90
         bg-white hover:bg-ppy-2 ink-50 ">Submit</button>
      </form>
    
      </div>
  )
}

