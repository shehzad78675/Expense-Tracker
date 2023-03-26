import { Grid } from "@mui/material";
import Details from "./components/Details/Details";
import { styled } from '@mui/material/styles';
import Main from "./components/Main/Main";
// import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';

const Root = styled('div')(({ theme }) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));


function App() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} margin={2} marginLeft={3}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3} margin={2}>
          <Main/>
        </Grid>
        <Grid item xs={12} sm={4} margin={2}>
          <Details title="Expense"/>
        </Grid>
      </Grid>
      {/* <PushToTalkButtonContainer>
        <PushToTalkButton/>
         <ErrorPanel/>
      </PushToTalkButtonContainer> */}
    </div>
  );
}

export default App;
