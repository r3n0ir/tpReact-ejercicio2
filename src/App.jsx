import "bootstrap/dist/css/bootstrap.min.css";
import Saludo from "./components/saludo";

function App() {
  return (
    <section className="container">
      <Saludo saludo="my friend!" />
    </section>
  );
}

export default App;
