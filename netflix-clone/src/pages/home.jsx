import Header from "../Components/Header/header"
import Footer from "../Components/Footer/footer"
import Banner from "../Components/Banner/banner"

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ padding: '20px', flex: 1, backgroundColor: '#000' }}>
    
      </main>
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
