import './App.css'
import { Navbar } from './components/organisms/Navbar'
import { Results } from './components/organisms/Results'
import { SearchBar } from './components/organisms/SearchBar'
import { SearchProvider } from './contexts/SearchContext/SearchContext'

function App() {

  return (
    <>
      <SearchProvider>
        <Navbar/>
        <SearchBar/>
        <Results/>
      </SearchProvider>
    </>
      
  )
}

export default App
