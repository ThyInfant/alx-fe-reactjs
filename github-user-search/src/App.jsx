import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <p>Welcome to the GitHub User Search application!</p>
      <Search />
      <h1 className="text-4xl font-bold text-purple-600">
        Tailwind v4 is working!
      </h1>
    </div>
  );
}

export default App;
