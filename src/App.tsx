import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import About from "./Scenes/About/About";
import Home from "./Scenes/Home/Home";
import Basics from "./Scenes/Basics/Basics";
import Intro from "./Scenes/Basics/Intro";
import styled from "styled-components";
import Notes from "./Scenes/Basics/Notes";
import Scales from "./Scenes/Basics/Scales";
import ChordsIntervals from "./Scenes/Basics/ChordIntervals";
import ChordProgressions from "./Scenes/Basics/ChordProgressions";

const Container = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  background-color: #2c2b24;
  padding: 10px;
  border-radius: 5px;
`;

const SideBarContentWrapper = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 12% 88%;
`;

const ContentWrapper = styled.div`
  background-color: lightgray;
  margin-left: 15px;
  position: relative;
  border-radius: 5px;
  padding-left: 1%;
  padding-right: 1%;
  min-height: 800px;
`;

function App() {
  return (
    <Container>
      <Header />
      <SideBarContentWrapper>
        <SideBar />
        <ContentWrapper>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/basics" element={<Basics />} />
              <Route path="/basics/notes" element={<Intro />} />
              <Route path="/basics/notes" element={<Notes />} />
              <Route path="/basics/scales" element={<Scales />} />
              <Route
                path="/basics/chords-intervals"
                element={<ChordsIntervals />}
              />
              <Route
                path="/basics/chord-progressions"
                element={<ChordProgressions />}
              />
            </Routes>
          </Router>
        </ContentWrapper>
      </SideBarContentWrapper>
    </Container>
  );
}

export default App;
