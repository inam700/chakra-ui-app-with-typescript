import { ChakraProvider, theme } from "@chakra-ui/react";
import LoginForm from "./pages/LoginForm";
import PostCard from "./pages/PostCard";
import RootLayout from "./layouts/RootLayout";
import Help from "./pages/help/Help";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LoginForm />} />
        <Route path="about" element={<PostCard />} />
        <Route path="help" element={<Help />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );

  return (
    <ChakraProvider theme={theme}>
      <h1>learn react</h1>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
