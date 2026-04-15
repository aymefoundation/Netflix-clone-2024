import Header from "../Components/Header/header"
import Footer from "../Components/Footer/footer"
import Banner from "../Components/Banner/banner"
import RowList from "../Components/Rows/RowList/RowList"

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ padding: '20px', flex: 1, backgroundColor: '#000' }}>
      </main>
      <Banner />
          <RowList />

      <Footer />
    </div>
  )
}

export default Home
