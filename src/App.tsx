import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'
import About from './Scenes/About/About'
import Home from './Scenes/Home/Home'
import Basics from './Scenes/Basics/Basics'
import Intro from './Scenes/Basics/Intro'
import styled from 'styled-components'
import Notes from './Scenes/Basics/Notes'
import Scales from './Scenes/Basics/Scales'
import ChordsIntervals from './Scenes/Basics/ChordIntervals'
import ChordProgressions from './Scenes/Basics/ChordProgressions'
import BarreChords from './Scenes/Chords/BarreChords'
import Chords from './Scenes/Chords/Chords'
import ChordSheets from './Scenes/Chords/ChordSheets'
import OpenChords from './Scenes/Chords/OpenChords'
import PowerChords from './Scenes/Chords/PowerChords'
import ChordsInKey from './Scenes/ChordsInKey/ChordsInKey'
import BluesScale from './Scenes/Scales/BluesScale'
import MajorScale from './Scenes/Scales/MajorScale'
import MinorScale from './Scenes/Scales/MinorScale'
import PentatonicScale from './Scenes/Scales/PentatonicScale'
import ExerciseOne from './Scenes/Tips/ExerciseOne'
import GettingInTune from './Scenes/Tips/GettingInTune'
import Maintenance from './Scenes/Tips/Maintenance'
import Tips from './Scenes/Tips/Tips'
import ScalesHome from './Scenes/Scales/ScalesHome'

const Container = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  background-color: #2c2b24;
  padding: 10px;
  border-radius: 5px;

  @media only screen and (max-width: 1000px) {
    margin-left: 0%;
    margin-right: 0%;
    font-size: small;
  }
`

const SideBarContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 12% 88%;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 100%;
  }
`

const ContentWrapper = styled.div`
  background-color: lightgray;
  margin-left: 0.9rem;
  position: relative;
  border-radius: 5px;
  padding-left: 1%;
  padding-right: 1%;
  min-height: 800px;
  @media only screen and (max-width: 1000px) {
    margin-left: 0%;
    padding-left: 3%;
    padding-right: 3%;
    max-width: fit-content;
    min-width: 94%;
    max-width: 94%;
  }
`

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <SideBarContentWrapper>
          <SideBar />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/basics" element={<Basics />} />
              <Route path="/basics/intro" element={<Intro />} />
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
              <Route path="/chords" element={<Chords />} />
              <Route path="/chords/open-chords" element={<OpenChords />} />
              <Route path="/chords/barre-chords" element={<BarreChords />} />
              <Route path="/chords/power-chords" element={<PowerChords />} />
              <Route path="/chords/chord-sheets" element={<ChordSheets />} />
              <Route path="/chords-in-key" element={<ChordsInKey />} />
              <Route path="/scales" element={<ScalesHome />} />
              <Route
                path="/scales/pentatonic-scale"
                element={<PentatonicScale />}
              />
              <Route path="/scales/blues-scale" element={<BluesScale />} />
              <Route path="/scales/major-scale" element={<MajorScale />} />
              <Route path="/scales/minor-scale" element={<MinorScale />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/tips/getting-in-tune" element={<GettingInTune />} />
              <Route
                path="/tips/guitar-maintenance"
                element={<Maintenance />}
              />
              <Route path="/tips/1234-exercise" element={<ExerciseOne />} />
            </Routes>
          </ContentWrapper>
        </SideBarContentWrapper>
      </Container>
    </Router>
  )
}

export default App
