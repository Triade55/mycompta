import React,{useState,useEffect} from 'react';
import Uncompte from './Uncompte';
import useComptes from '../hook/comptes.hook';

export default function App() {
 const comptes = useComptes()
  return (
    
     <div className='row gap-5 my-3 d-flex justify-content-between'>
     {comptes.map(compte => (
          <Uncompte key={compte.id} name={compte.name}/>
        ))}
     </div>
  );
}