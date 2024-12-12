import Button from "./components/buttton/index.jsx";
import Header from "./components/header/index.jsx";
import Input from "./components/input/index.jsx";
import Typography from "./components/typography/index.jsx";
import Tooltip from "./components/tooltip/index.jsx";
import Accordion from "./components/accordion/index.jsx";
import { useEffect, useState } from "react";
import CoinElement from "./components/final/coin/index.jsx";

function App() {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = () => {
    setLoading(true);
    fetch("https://api.coinlore.net/api/tickers/")
      .then((res) => res.json())
      .then((data) => setCoins(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins = coins.data?.filter((coin) => 
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    coin.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {console.log(filteredCoins)}
      <Header className="crypto-header" level={1}>Cryptocurrency Prices</Header>
      <Button className="update-btn" variant="bordered" onClick={fetchData}>Update</Button>
      <Input placeholder="Search..." label="" value={searchTerm} onChange={handleSearchChange} />

      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        filteredCoins.map((coin) => <CoinElement key={coin.id} data={coin} />)
      )}
    </div>
  );
}

export default App;
