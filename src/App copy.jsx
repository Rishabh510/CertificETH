import Install from "./components/Install";
import Home from "./components/Home";
import WalletBalance from "./components/WalletBalance";

function App() {
  if (window.ethereum) {
    // return <Home />;
    return <WalletBalance />;
  } else {
    return <Install />;
  }
}

export default App;
