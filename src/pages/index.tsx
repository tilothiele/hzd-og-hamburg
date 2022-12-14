import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { StaticImage } from "gatsby-plugin-image"
import { createTheme, responsiveFontSizes, ThemeProvider, useMediaQuery } from '@mui/material'

import { SEO } from '../components/seo'

const InfoBlock = () => {
  return (
    <>
      <a href="https://hovawarte.com"><StaticImage src="../images/hzd-logo.png" alt="HZD"/></a>
      <Typography variant="h2" mt={4} mb={4}>Hovawart Zuchtgemeinschaft Deutschland</Typography>
      <StaticImage src="../images/hamburg-symbol-148x191.gif" alt="Hamburg"/>
      <Typography variant="h3" mt={4}>Regionalgruppe Nord</Typography>
      <Typography variant="h4" mb={4}><a href="https://www.hovawarte.com/verein/regionalgruppen/nord/og-hamburg">Ortsgruppe Hamburg</a></Typography>
      <Typography>Die Email-Adresse unserer Geschäftsstelle lautet <a href="mailto:geschaeftsstelle@hzd-og-hamburg.de">geschaeftsstelle@hzd-og-hamburg.de</a>.</Typography>
      <Typography>Weitere Infos, Impressum und Kontaktmöglichkeiten finden Sie auf der
        Haupt-Webpräsenz <a href="https://www.hovawarte.com/verein/regionalgruppen/nord/og-hamburg/ansprechpartner">des HZD</a>.</Typography>
    </>

  )
}
export default function Home() {
  const theme = responsiveFontSizes(createTheme());
  const match = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
    <ThemeProvider theme={theme}>
      {match && <Box ml={4} mr={4}>
        <Paper sx={{textAlign: 'center', padding: 8, boxShadow: 6}} >
          <InfoBlock/>
        </Paper>
      </Box>}
      {!match && <Box sx={{textAlign: 'center', padding: 2}}>
          <InfoBlock/>
        </Box>}
    </ThemeProvider>
    </>
  );
}

export const Head = () => (
  <SEO />
)