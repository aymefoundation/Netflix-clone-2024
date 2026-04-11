import Header from "../Components/Header/header"
import Footer from "../Components/Footer/footer"

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ padding: '20px', flex: 1, backgroundColor: '#000' }}>
        <h1 style={{ color: 'white' }}>Welcome to Netflix Clone</h1>
        <p style={{ color: 'white' }}>This is the home page. Add your movie rows and content here.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Home
