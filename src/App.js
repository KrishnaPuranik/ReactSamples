import "./styles.css";

export default function App() {
  const arr = [];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {arr.length && <h3>Length is greater</h3>}
      {arr.length === 0 && <h3>Length is zero</h3>}
      {arr.length ? <h3>Length is greater</h3> : <h3>Length is zero</h3>}
    </div>
  );
}
