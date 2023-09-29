import { ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { v4 as uuidv4 } from "uuid";

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: () => void;
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const fetchTransactions = useCallback(() => {
        const storedStateAsJSON = localStorage.getItem('@dt-money:transactions-1.0.0') || '[]';
        const storedStateAsArray = JSON.parse(storedStateAsJSON);
        setTransactions(storedStateAsArray);
    }, [])

    const createTransaction = useCallback(async (data: CreateTransactionInput) => {

        const { description, price, category, type } = data;

        const transactionData = {
            id: uuidv4(),
            description,
            category,
            price,
            type,
            createdAt: new Date(),
        }

        const storedStateAsJSON = localStorage.getItem('@dt-money:transactions-1.0.0') || '[]';
        const storedStateAsArray = JSON.parse(storedStateAsJSON);

        storedStateAsArray.push(transactionData);
        const updatedStateAsJSON = JSON.stringify(storedStateAsArray);
        localStorage.setItem('@dt-money:transactions-1.0.0', updatedStateAsJSON);

        setTransactions(storedStateAsArray)
        
    }, [])

    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}