import Modal from 'react-modal'
import { api } from '../../services/api';
import { Container,TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/closed_btn.svg'
import outcomeImg from '../../assets/saidas.svg'
import incomeImg from '../../assets/entradas.svg'
import {useState, FormEvent, useContext} from 'react'
import { TransactionsContext } from '../../TransactionsContext';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( {isOpen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const {createTransaction} = useContext(TransactionsContext)


    async function handleCreateNewTransaction(event : FormEvent){
        event.preventDefault();

        await createTransaction({
            title, amount, category, type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        
        onRequestClose();
    }

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName={'react-modal-overlay'}
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='Valor'
                    value={amount}
                    onChange={event => setAmount(event.target.valueAsNumber)}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entradas</span>
                    </RadioBox>    

                    <RadioBox 
                        type="button" 
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>        
                </TransactionTypeContainer>

                <input 
                    placeholder='Categoria'
                    onSubmit={handleCreateNewTransaction}
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    );
}