import { Summary } from '../Summary/Index';
import { TransactionTable } from '../TransactionTable/Index';
import {Container} from './styles'

export function Dashboard(){
    return(
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}