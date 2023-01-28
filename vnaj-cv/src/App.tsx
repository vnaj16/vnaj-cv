import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import vnaj_photo from './assets/vnaj.jpg'
import './App.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Styles = {
  Card: {
    borderRadius: "0px", height: "100%"
  }
}

//#region Fullname
interface FullnameProps {
  Firstname?: string;
  Lastname?: string;
}

function Fullname({ Firstname, Lastname }: FullnameProps) {
  return <Card variant="outlined" style={Styles.Card}>
    <CardContent>
      <a href="https://reactjs.org" target="_blank">
        <img src={vnaj_photo} className="logo react" alt="React logo" />
      </a>
      <Typography sx={{ fontSize: 32 }} variant="h1" color="#0081B4" gutterBottom>
        {Firstname} {Lastname}
      </Typography>
    </CardContent>
  </Card>
}
//#endregion

interface SectionProps {
  Name: string;
}

function Section({ Name }: SectionProps) {
  return <Card variant="outlined" style={Styles.Card}>
    <CardContent>
      <Typography sx={{ fontSize: 32 }} variant="h1" color="#0081B4" gutterBottom>
        SECTION {Name}
      </Typography>
      <Typography sx={{ fontSize: 14 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lacus at mollis dictum. Morbi vestibulum nisi ex, vitae consectetur quam viverra eu. Maecenas quis risus lacus. Phasellus blandit sagittis erat sit amet mollis. Mauris imperdiet iaculis vehicula. Mauris non tempor risus. Donec vitae ornare ante. Morbi at lobortis mauris. Donec rutrum mattis est quis consectetur. Fusce tempor diam sed turpis tempor, sed interdum turpis ultricies. Mauris vel odio elementum, suscipit turpis ac, lobortis felis. Suspendisse efficitur varius diam eu euismod. Maecenas a commodo massa.
      </Typography>
    </CardContent>
  </Card>
}

//#region Main
function App() {
  const [cvInfo, setCvInfo] = useState(null)

  useEffect(() => {
    fetch('/src/data/default.cv.json').then(res => res.json())
      .then(setCvInfo);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: '#242424' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} direction="row"
          justifyContent="center"
          alignItems="stretch">
          <Grid item xs={6}>
            <Fullname {...cvInfo?.PersonalInfo} />
          </Grid>
          <Grid item xs={6}>
            <Section Name='Degree' />
          </Grid>
          <Grid item xs={6}>
            <Section Name='Profile' />
          </Grid>
          <Grid item xs={6}>
            <Section Name='Contact' />
          </Grid>
          <Grid item xs={6}>
            <Section Name='Experience' />
          </Grid>
          <Grid item xs={6}>
            <Section Name='Skills' />
          </Grid>
          <Grid item xs={6}>
            <Section Name='Studies' />
          </Grid>
          <Grid item xs={6}>
            <Section Name='Soft Skills' />
          </Grid>
        </Grid>
      </Box>
      <div className="card">
        <Button variant="outlined" id="pdf" onClick={() => {
          document.getElementById('pdf').onclick = function () {
            var cv = document.getElementById('root');
            var options = {
              margin: 1,
              filename: "vnaj.cv.pdf",
              image: { type: "jpeg", quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'A4', orientation: "portrait" }
            };

            html2pdf(cv, options);
          };
        }}>PDF</Button>
      </div>
    </div>
  )
}
//#endregion
export default App
