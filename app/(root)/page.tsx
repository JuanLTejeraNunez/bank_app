import HeaderBox from '@/components/HeaderBox'



const Home = () => {
    const loggedIn ={firstName : 'Juan'};
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

           
            
        </header>

    </div>
    </section>
  )
}

export default Home