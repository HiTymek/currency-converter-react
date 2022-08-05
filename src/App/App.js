import "./style.css";
import Header from "./Header";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {
  return (
    <div className="container">

      <Header title="WIRTUALNY KANTOR CENTUŚ 😎" />

      <main>

        <Form
          legend="WYMIANA WALUT"
          currencies={currencies}
        />

      </main>
    </div>
  );
}

export default App;
