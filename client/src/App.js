import Home from "./pages/Home";
import Bar from "./components/Bar";
import Login from "./components/Login";

import { Typography } from "@mui/material";

function App() {
  return (
    <div>
      <Bar />
      <Typography variant="h2"> Healthee-Byte: Coming Soon!</Typography>
      <Home />
      <Login />
    </div>
  );
}

export default App;
