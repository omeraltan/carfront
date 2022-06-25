import './App.css';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default App;
