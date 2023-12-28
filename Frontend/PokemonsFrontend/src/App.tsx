import Categories from './Pages/Categories/Categories'
import Countries from './Pages/Countries/Countries'
import Owners from './Pages/Owners/Owners'
import Reviewwers from './Pages/Reviewers/Reviewers'


function App() {

  return (
    <>
      <div className='app-container'>
        <Countries />
        <Categories />
        <Reviewwers />
        <Owners />
      </div>
    </>
  )
}

export default App
