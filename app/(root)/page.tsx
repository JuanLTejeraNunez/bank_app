import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';



const Home = () => {
    const loggedIn ={firstName : 'Juan', lastName : 'Tejera'};
  return (
    <section className= "home">Home
    <div className= "home-content">
        <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Gest'}
            subtext="Acces and manage your account and transactions efficiently."

            />

           <TotalBalanceBox 
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1250.35}
                    
           />
            
        </header>

    </div>

    <RightSidebar
    user={loggedIn}
    transsactions={[]}
    banks={[]}/>
    </section>
  )
}

export default Home