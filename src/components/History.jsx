import React from 'react';
export default function History({ type,name,montant,compte,date }) {
  return (
    <div className={`row ${type ? 'bg-success' : 'bg-warning'} text-light p-3 d-flex align-items-center rounded-5 my-2`}>
      <div className="col-1">
        <i className={`fas fa-3x ${type ? 'fa-download':'fa-upload'}`}></i>
      </div>
      <div className="col-9 text-center fs-4">
        {name}
        <div className="h6">
          {compte}
        </div>
      </div>
      <div className="col-2 text-end">
        <div className="h6">
          {date.toLocaleString("fr-FR")}
        </div>
        <div className="h4">{montant.toLocaleString('fr-FR')} FCFA</div>
        
      </div>
    </div>
  );
}
