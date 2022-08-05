import "./style.css";
import Paragraph from "./Paragraph";

const Form = ({ legend }) => {
    return (
        <form className="form">

            <fieldset className="form__fieldset">

                <legend className="form__legend">{legend}</legend>
                <Paragraph
                    label="WYBIERZ WALUTE"
                >
                    <select className="form__field">
                        <option>EUR</option>
                        <option>USD</option>
                        <option>GBP</option>
                        <option>CHF</option>
                        <option>UAH</option>
                    </select>
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