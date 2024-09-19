import FormAddWord from "./components/FormAddWord";
import FormGetWords from "./components/FormGetWord";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div style={{ marginRight: "100px" }}>
        <FormAddWord />
      </div>
      <div>
        <FormGetWords />
      </div>
    </div>
  );
}

export default App;
