import { Field, FieldInputProps } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";

type ArrayType = {
  label: string;
  value: number;
}[];

type Props = {
  type?: string;
  label?: string;
  name: string;
  option?: ArrayType;
};

const SelectField = (props: Props) => {
  const { label, name, option, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }: { field: FieldInputProps<any>; form: any }) => {
        return (
          <FormControl
            isInvalid={form.errors[name] && form.touched[name]}
            mb={4}
          >
            <FormLabel htmlFor={name}> {label}</FormLabel>
            <Select
              id={name}
              placeholder={"Select option"}
              {...rest}
              {...field}
              bg={"white"}
            >
              {option?.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </Select>
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default SelectField;
