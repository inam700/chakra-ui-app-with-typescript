import { Field, FieldInputProps } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

type Props = {
  type?: string;
  label?: string;
  name: string;
};

function InputField(props: Props) {
  const { label, name, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, form }: { field: FieldInputProps<any>; form: any }) => {
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            mb={4}
          >
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input id={name} {...rest} {...field} bg={"white"} />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default InputField;
