import Header from "components/header/Header";
import Siderbar from "components/sidebar/Sidebar";
import Data from "components/data/Data";

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
