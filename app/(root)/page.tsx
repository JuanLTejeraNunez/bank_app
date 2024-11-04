import HeaderBox from '@/components/HeaderBox'
import RecentTransaction from '@/components/RecentTransaction';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';



const Home = async ({ searchParams : {id, page} } : SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    const accounts= await getAccounts({
      userId : loggedIn.$id
    })

    if(!accounts) return;

    const accountData =  accounts?.data;
    const appwriteItemId = (id as string) || accountData[0]?.appwriteItemId;
    const account =await getAccount({appwriteItemId});
  return (
    <section className= "home">Home
    <div className= "home-content">
        <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Gest'}
            subtext="Acces and manage your account and transactions efficiently."

            />

           <TotalBalanceBox 
           accounts={accountData}
           totalBanks={accounts?.totalBanks}
           totalCurrentBalance={accounts?.totalCurrentBalance}
                    
           />
            
        </header>
                   <RecentTransaction
                   accounts={accountData}
                   transactions={account?.transactions}
                   appwriteItemId={appwriteItemId}
                   page={currentPage}
                   />
    </div>

    <RightSidebar
    user={loggedIn}
    transactions={accounts?.transactions}
    banks={accounts?.slice(0,2)}/>
    </section>
  )
}

export default Home