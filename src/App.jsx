
import './App.css'

function App() {
  const [pokeData,setPokeData] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");

  useEffect(()=>{
    const fetchPokeData = async() =>{
      const response = await fetch ("https://pokeapi.co/api/v2/pokemon")
    }
  })
}

export default App
