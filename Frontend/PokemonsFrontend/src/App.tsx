import Categories from './Pages/Categories/Categories'
import Countries from './Pages/Countries/Countries'
import Owners from './Pages/Owners/Owners'
import Reviewwers from './Pages/Reviewers/Reviewers'
import Reviews from './Pages/Reviews/ReviewsCRUD/Reviews'

function App() {
  return (
    <>
      <div className='app-container'>
        <Countries />
        <Categories />
        <Reviewwers />
        <Reviews />
        <Owners />
      </div>
    </>
  )
}

export default App
