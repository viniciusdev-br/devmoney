import {useContext} from 'react'
import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext'
import incomeImg from '../../assets/entradas.svg';
import outImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';

export function Summary(){
    const {transactions} = useContext(TransactionsContext)
    console.log(transactions)
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}