import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.LastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'John'} LastName={'Doe'} age={25}/>
      <Person name={'Mary'} LastName={'Jane'} age={22}/>
      <Person name={'Bryan'} LastName={'Wick'} age={20}/>
      <Person name={'Ted'} LastName={'Mais'} age={27}/>
      <Person name={'Gen'} LastName={'Kim'} age={19}/>
    </div>
  );
}

export default App;
