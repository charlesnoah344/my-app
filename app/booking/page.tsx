import Image from "next/image";

import { addInfo, getInfos, removeInfo, editInfo } from '@/lib/info'


export default async function InformationApp() {
  const infos = await getInfos()
  return (
    <>
    <h1 className="text-center text-xl my-0 sm:text-3xl md:text-4xl px-4 py-4 "> Reservations </h1>
      <table className="table-auto text-center text-xl my-0 sm:text-3xl md:text-4xl px-4 py-4">
        <thead>
          <tr>
            <th>Nom</th>
            <th>GSM</th>
            <th>Nombre</th>
            <th>Heure</th>
            <th>lien</th>
          </tr>
        </thead>
        <tbody>
          
            {infos.map((info, id) => (
            <>
            <tr>
            <td className="p-4 border"> {info.name} </td>
            <td className="p-4 border"> {info.gsm} </td>
            <td className="p-4 border"> {info.number} </td>
            <td className="p-4 border"> {info.hour} </td>
            <td className="p-4 border"> <a href={"booking/"+info.id}>{info.id}</a> </td>
            </tr>
            </>
            ))}
        </tbody>
    </table>
    </>
  )
}

