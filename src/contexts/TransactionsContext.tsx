import { ReactNode, useEffect, useState, useCallback } from "react";
// import { api } from "../lid/axios";
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
    fetchTransactions: (query?: string) => Promise<void>;
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

    const fetchTransactions = useCallback(async (query?: string) => {


        const storedStateAsJSON = localStorage.getItem('@dt-money:transactions-1.0.0') || '[]';
        const storedStateAsArray = JSON.parse(storedStateAsJSON);

        // storedStateAsArray.push(data);
        // const updatedStateAsJSON = JSON.stringify(storedStateAsArray);
        // localStorage.setItem('@dt-money:transactions-1.0.0', updatedStateAsJSON);

        // const response = await api.get('transactions', {
        //     params: {
        //         _sort: 'createdAt',
        //         _order: 'desc',
        //         q: query,
        //     }
        // });

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

        //JSON SERVER BELLOW

        // const { description, price, category, type } = data;

        // const response = await api.post('transactions', {
        //     description,
        //     category,
        //     price,
        //     type,
        //     createdAt: new Date(),
        // })

        // setTransactions(state => [response.data, ...state])
        
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