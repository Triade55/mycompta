import { useEffect, useState } from "react"
import { TRANSATIONS } from "../data/Toutes_les_transaction"

const useTransaction = () => {
    const [transactions, setTransaction] = useState([]);

    useEffect(() => {
        setTransaction(TRANSATIONS);
    }, []);

    return { transactions, setTransaction };
}

export default useTransaction;
