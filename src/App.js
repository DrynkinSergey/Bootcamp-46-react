import { Paper } from './components/Paper';
function App() {
  return (
    <main style={{
      display: 'grid',
      placeItems: 'center',
      height: '100vh',
      width: '100vw',
      fontSize: 'calc(1vh + 1vw)'
    }}>
      <ul style={{ display: 'flex' }}>
        <Paper color='yellow'>
          <p>Hello</p>
        </Paper>
        <Paper>
          <p>Hello</p>
        </Paper>
        <Paper color='green'>
          <p>Hello</p>
        </Paper>
      </ul>
    </main>

  );
}

export default App;
