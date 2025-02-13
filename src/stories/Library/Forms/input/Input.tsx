import Label from "../label/Label";

export type InputProps = {
  label: string;
  type: "text" | "password";
  id: string;
  description?: string;
  validation?: string;
};

const Input = (props: InputProps) => {
  const { label, type, id, description, validation } = props;
  const invalid = validation ? "true" : "false";
  return (
    <div className="dpl-input">
      <Label id={id}>{label}</Label>
      <input
        aria-invalid={invalid}
        aria-describedby={`description-${id}`}
        aria-labelledby={validation ? `validation-${id}` : ""}
        id={id}
        type={type}
      />
      {description && (
        <div className="dpl-input__description" id={`description-${id}`}>
          {description}
        </div>
      )}
      {validation && (
        <div id={`validation-${id}`} className="dpl-input__validation">
          {validation}
        </div>
      )}
    </div>
  );
};

export default Input;
