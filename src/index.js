import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Housing from "./pages/Housing"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="housing" element={<Housing />}>
        <Route path=":housingId" element={<Housing />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>);