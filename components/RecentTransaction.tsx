import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TraansactionsTable from './TransactionsTable'
import TransactionsTable from './TransactionsTable'

const RecentTransaction = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page = 1,
}: RecentTransactionsProps) => {
    return (
        <section className="recent-transaction">
            <header className="flex item-center justify=between">
                <h2 className="recent-transaction-lebel">
                    Recent transactions
                </h2>
                <Link
                    href={`/transactions-history/?id=${appwriteItemId}`}
                    className="view-all-btn"
                >
                    View all
                </Link>


            </header>

            <Tabs defaultValue={appwriteItemId} className="w-full">
                <TabsList
                className="recent-transaction-tablist">
                    {accounts.map((account : Account)=>(
                    
                    <TabsTrigger
                     key={account.id} 
                     value={account.appwriteItemId}>
                         <BankTabItem 
                         key={account.id}
                         account={account}
                         appwriteItemId={appwriteItemId}
                         />
                     </TabsTrigger>
             ))}
                </TabsList>
                {accounts.map((account : Account )=>(

                   <TabsContent
                   value={account.appwriteItemId}
                   key={account.id}
                   className="space-y-4"
                   >
                         
                         <BankInfo
                         account={account}
                         appwriteItemId={appwriteItemId}
                         type="full"
                         />

                         <TransactionsTable transactions={transactions}/>
                   </TabsContent>

                ))}

            </Tabs>

        </section>
    )
}

export default RecentTransaction