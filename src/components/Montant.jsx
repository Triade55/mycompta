import React from 'react'
import { useState } from 'react';
export default function Montant({transactions}) {
    const solde = transactions.reduce((total,transaction)=>total+transaction.montant,0)
    const soldee = solde.toLocaleString('fr-FR');

  return (
    <div className='d-flex justify-content-center'>
        <div className=' montant h1' > {soldee}</div> 
        <div className=''>cfa</div>
    </div> 
  )
}
