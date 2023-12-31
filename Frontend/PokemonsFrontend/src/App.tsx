import Categories from './Pages/Categories/Categories'
import Countries from './Pages/Countries/Countries'
import Owners from './Pages/Owners/Owners'
import Pokeomons from './Pages/Pokemon/Pokemons'
import Reviewwers from './Pages/Reviewers/Reviewers'
import Reviews from './Pages/Reviews/Reviews'

function App() {
  return (
    <>
      <div className='app-container'>
        <Countries />
        <Categories />
        <Reviewwers />
      </div>
      <div className='app-container'>
        <Reviews />
        <Owners />
        <Pokeomons />
      </div>
    </>
  )
}

export default App
