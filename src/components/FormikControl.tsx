import InputField from "./InputField";
import SelectField from "./Select";
import TextArea from "./TextArea";

type ArrayType = {
  label: string;
  value: number;
}[];

type Props = {
  control: string;
  name: string;
  type?: string;
  label?: string;
  option?: ArrayType;
};

function FormControl({ control, ...rest }: Props) {
  switch (control) {
    case "input":
      return <InputField {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <SelectField {...rest} />;
    default:
      return null;
  }
}
export default FormControl;
