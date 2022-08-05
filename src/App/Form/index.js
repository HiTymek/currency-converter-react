import "./style.css";
import Paragraph from "./Paragraph";
import CurrencySelect from "./CurrencySelect";

const Form = ({ legend }) => {
    return (
        <form className="form">

            <fieldset className="form__fieldset">

                <legend className="form__legend">{legend}</legend>

                <Paragraph
                    label="WYBIERZ WALUTE"
                >
                    <CurrencySelect />
                </Paragraph>

                <Paragraph
                    label="WPISZ KWOTĘ W PLN"
                >
                    <input className="form__field" type="number" id="amount" min="1" step="0.1"
                        placeholder="Kwotę podaj w PLN" />
                </Paragraph>

                <Paragraph
                    label="WYNIK : "
                >
                    <strong></strong>
                </Paragraph>

                <Paragraph>
                    <button className="form__button">PRZELICZ</button>
                </Paragraph>

            </fieldset>

        </form>
    );
};

export default Form;