import { CSSProperties, FunctionComponent } from "react";
import "../styles/index.css";

const TextInput: FunctionComponent<{
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  fixedText?: string;
  customStyle?: {
    input: CSSProperties;
  };
  min?: number;
}> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  fixedText,
  customStyle,
  min,
}) => {
  return (
    <div className="input-container-style">
      <label className="input-label-style">
        {label}
        {required ? " *" : ""}
      </label>
      <div className="input-wrapper-style">
        {fixedText && <span className="input-fixed-text">{fixedText}</span>}
        <input
          style={customStyle?.input}
          className="input-style"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          min={min}
        />
      </div>
    </div>
  );
};

export default TextInput;
