import { getinfo, removeInfo, editInfo } from "@/lib/info"

type InfoAppProps = {
  params : Promise<{id : string}>
}

export default async function InfoApp(props:InfoAppProps) {
    const id = ((await props.params).id)
    const info = await getinfo(id)
    return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 max-w-5xl mx-auto">
          
          <h1 className="text-center text-xl my-0 sm:text-3xl md:text-4xl px-4 py-4 "> Reservations </h1>
            
              <div className="py-5">
              <form  >
                <div>
              <input
                name="title"
                defaultValue={info.name}
                className="border w-full h-40 px-2"
              >
              </input>
              <li className="bold text-1xl"> id de l'article : {info.id}</li>
              </div>
                <button formAction={removeInfo.bind(null, info.id)} key={id}  className="px-4 py-2 rounded-md font-medium text-blue-600 border-2 border-blue-600/90
                 bg-white hover:bg-pink-50 ">
                  Delete infos
                </button>
                <button formAction={editInfo} key={id} className="px-4 py-2 rounded-md font-medium text-blue-600 border-2 border-blue-600/90
                 bg-white hover:bg-pink-50 ">
                  Edit infos
                </button>
                <input type="hidden" name="id" value={info.id} />
    
              </form>
              </div>
          
          
          </div>
      )
    }
    

