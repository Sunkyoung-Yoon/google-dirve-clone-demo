import Header from "components/Header";
import Siderbar from "components/Siderbar";
import Data from "components/Data";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Siderbar />
        <Data />
      </div>
    </>
  );
}

export default App;
