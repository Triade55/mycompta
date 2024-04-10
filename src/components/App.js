import '../css/styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../page/Home';
import Compte from '../page/Compte';
import NoPage from '../page/Nopage';
import Navigation from './Navigation';
import Montant from './Montant';
import useTransaction from '../hook/transaction.hook';
function App() {
  const { transactions, setTransaction } = useTransaction();

  return (
    <>
    <Navigation />
    <Montant transactions={transactions} />
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home transactions={transactions} setTransaction={setTransaction} />} />
          <Route path='compte' element={<Compte />} />

          <Route path="*" element={<NoPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
