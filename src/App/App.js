import Header from "./Header";
import Form from "./Form";
import { Wrapper } from "./styled";

function App() {
  return (
    <Wrapper>
      <Header title="WIRTUALNY KANTOR CENTUŚ 😎" />
      <main>
        <Form legend="WYMIANA WALUT" />
      </main>
    </Wrapper>
  );
};

export default App;
