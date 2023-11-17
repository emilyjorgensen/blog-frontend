import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

// cleans out other components
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
