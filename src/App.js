//routs
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import BookList from "./Components/BookList/BookList";
import BookDetails from "./Components/BookDetails/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
