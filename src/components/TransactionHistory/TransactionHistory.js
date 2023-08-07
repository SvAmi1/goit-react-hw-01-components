import { HeadName, HeadRow, TrHead, TrTable, TableRow, TableData } from "./TransactionHistory.styled";


export const Transactions = ({transactions}) => {
    return (
        <TrTable>
        <table>
        <TrHead>
          <HeadRow>
            <HeadName>Type</HeadName>
            <HeadName>Amount</HeadName>
            <HeadName>Currency</HeadName>
          </HeadRow>
        </TrHead>
      
        <tbody>
        {transactions.map((transaction)=>(
        <TableRow id={transaction.id}>
            <TableData>{transaction.type}</TableData>
            <TableData>{transaction.amount}</TableData>
            <TableData>{transaction.currency}</TableData>
        </TableRow>
        ))}
        </tbody>
      </table>
        </TrTable>
     );
    }
