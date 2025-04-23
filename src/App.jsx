import "./global.css";
import "./App.css";
import HeaderTop from "./components/HeaderTop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative">
      <div className="fixed min-h-screen inset-0 -z-10 w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Home />
    </div>
  );
}

export default App;
