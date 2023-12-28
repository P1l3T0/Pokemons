import Categories from './Pages/Categories/Categories'
import Countries from './Pages/Countries/Countries'
import Owners from './Pages/Owners/Owners'

function App() {

  return (
    <>
      <div className='app-container'>
        <Countries />
        <Owners />
        <Categories />
      </div>
    </>
  )
}

export default App
