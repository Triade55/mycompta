import React from 'react'
import Comptes from '../components/Comptes'
import Addcompte from '../components/Addcompte'

function Compte() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Tous les comptes </h1> <Addcompte/>
          <Comptes/>
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Compte