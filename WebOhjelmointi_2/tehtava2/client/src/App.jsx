import FormAddWord from "./components/FormAddWord";
import FormGetWords from "./components/FormGetWord";

function App() {
  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col-2 ">
          <FormAddWord />
        </div>
        <div className="col-2">
          <FormGetWords />
        </div>
        <div className="col"></div>
      </div>
    </>

    // <div className="d-flex justify-content-center">
    //   <div style={{ marginRight: "100px" }}>
    //     <FormAddWord />
    //   </div>
    //   <div>
    //     <FormGetWords />
    //   </div>
    // </div>
  );
}

export default App;
