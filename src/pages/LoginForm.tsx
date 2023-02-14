import { Box, Button, VStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";

const LoginForm = () => {
  const initialValues = {
    email: "",
    topic: 0,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    topic: Yup.number().required("Required"),
  });
  const onSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };
  return (
    <VStack
      bg={"blue.100"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        w={"25%"}
        bg={"orange.100"}
        border={"2px solid purple"}
        borderRadius={8}
        px={10}
        py={20}
      >
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="email"
                  label="Email"
                />
                <FormikControl
                  control="select"
                  label="Select a topic"
                  name="topic"
                  option={[
                    { label: "Option 1", value: 1 },
                    { label: "Option 2", value: 2 },
                  ]}
                />

                <Button
                  type="submit"
                  colorScheme={"purple"}
                  disabled={!formik.isValid}
                  w={"100%"}
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </VStack>
  );
};

export default LoginForm;
