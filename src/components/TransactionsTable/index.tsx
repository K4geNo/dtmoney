import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'
import { FaTrashAlt } from 'react-icons/fa'

export function TransactionsTable() {
    const { transactions, setTransactions } = useTransactions()

    function handleRemoveTransaction(id: number) {
        const updateTransaction = transactions.filter(
            (transaction) => transaction.id !== id
        )
        setTransactions(updateTransaction)
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>

                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleRemoveTransaction(transaction.id)
                                    }
                                >
                                    <FaTrashAlt size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}
