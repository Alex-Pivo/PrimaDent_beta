import App from "./App";
import Portfolio from "./Portfolio/Portfolio";
import Prices from "./Prices/Prices";
import Header from "./header/Header";
import Modal from "./Modal/Modal";
import Notes from "./notes/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function MainApp() {
  const [active, setActive] = useState(false);
  return (
    <>
      <BrowserRouter>
        {active && (
          <Modal active={active} setActive={setActive}>
            <Notes></Notes>
          </Modal>
        )}
        <Header active={active} setModal={() => setActive(true)}></Header>
        <Routes>
          <Route path="/" element={<App></App>}></Route>
          <Route path="prices" element={<Prices></Prices>}></Route>
          <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainApp;
