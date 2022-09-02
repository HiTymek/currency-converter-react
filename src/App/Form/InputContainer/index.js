import "./style.css";

const InputContainer = ({ label, children }) => (
    <p className="form__paragraph">
        <label className="form__label">{label}</label>
        {children}
    </p>
);

export default InputContainer;