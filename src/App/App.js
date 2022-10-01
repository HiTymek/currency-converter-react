import Header from "./Header";
import Form from "./Form";
import { Wrapper } from "./styled";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "teal",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header title="WIRTUALNY KANTOR CENTUŚ 😎" />
        <main>
          <Form legend="WYMIANA WALUT" />
        </main>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
