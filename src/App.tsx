import { Dashboard } from './components/Dashboard/Index';
import { Header } from './components/Header/Index';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal'
import {useState} from 'react'
import { NewTransactionModal } from './components/NewTransactionModal';


export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}