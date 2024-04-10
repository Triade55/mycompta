import React, { useEffect, useState } from 'react'
import { Tous_les_Comptes } from '../data/Tous_les_Comptes'
const useComptes=()=>{
    const [datacomptes,setDataComptes] = useState([])
    useEffect(()=>{setDataComptes(Tous_les_Comptes);},[])
    return datacomptes
}
export default useComptes
