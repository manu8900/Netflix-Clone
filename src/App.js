import React from "react";
import { AccordionContainer } from "./containers/accordionContainer";
import { FooterContainer } from "./containers/footerContainer";

import {JumbotronContainer} from "./containers/jumbotronContainer";

export default function App() {
  return (
    <>
    <JumbotronContainer />
    <AccordionContainer/>
    <FooterContainer />

    </>
  );
}

