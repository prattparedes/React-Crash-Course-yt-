import './App.css';

const App = () => {
  const name = 'John';
  const isNameShowing = true;
  
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
      {name ? (
      <>
        test
      </>) : (
        test
      )}
    </div>
  );
}

export default App;
