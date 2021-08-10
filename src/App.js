import React from "react";
import Header from "./Components/Headers/Header";
import Header2 from "./Components/Headers/Header2";
import SectionMiddle from "./Components/Sections/SectionMiddle";
import SectionTop from "./Components/Sections/sectionTop";
import SectionLast from "./Components/Sections/SectionLast";
import Anothersection from "./Components/Sections/Anothersection";
import Othersectionfirst from "./Components/OtherSection/Othersectionfirst";
import Othersectionsecond from "./Components/OtherSection/Othersectionsecond";

export default function App() {
  return (
    <div className="othert">
      <Header />
      <Header2 />
      <SectionTop />
      <SectionMiddle />
      <SectionLast />
      <Anothersection />
      <Othersectionfirst />
      <Othersectionsecond />
    </div>
  );
}
