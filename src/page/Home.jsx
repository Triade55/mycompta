import React, { useEffect, useState } from "react";
import { MDBInputGroup, MDBIcon } from "mdb-react-ui-kit";
import History from "../components/History";
export default function Home({transactions,setTransaction}) {
  const [searchValue,setSearchValue] = useState("")
  useEffect(() => {
    const filteredTransactions = transactions.filter(transaction => {
        if (searchValue === "") {
            return true; // Retourne toutes les transactions si searchValue est vide
        } else {
            return transaction.name.toLowerCase().includes(searchValue);
        }
    });
    setTransaction(filteredTransactions);
}, [searchValue, transactions]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {searchValue}
          <MDBInputGroup
            className="mb-3"
            textAfter={<MDBIcon fas icon="search" />}
          >

            <input className="form-control" type="text" placeholder="Search in your history" aria-label="Search in your history" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
            <select name="" id="" className="bg-success bg-opacity-25">
              <option value="">all</option>
              {transactions.map(transaction =>(
                <option value={transaction.name}>{transaction.name}</option>
              ))}
            </select>
          </MDBInputGroup>
        </div>
        <div className="col-12">
          {transactions.map(transaction =>(
            <History type={transaction.type} name={transaction.name} montant={transaction.montant} compte={transaction.compte} date={transaction.date.}/>
          ))}
        </div>
      </div>
    </div>
  );
}
