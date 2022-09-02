import "./style.css";
import Header from "./Header";
import Form from "./Form";

function App() {
  return (
    <div className="container">
      <Header title="WIRTUALNY KANTOR CENTUŚ 😎" />
      <main>
        <Form legend="WYMIANA WALUT" />
      </main>
    </div>
  );
};

export default App;
