import DisplayOnLoad from "./components/DisplayOnLoad";
import DisplayOnLoadForm from "./components/DisplayOnLoadForm";
import FetchComponent from "./components/FetchComponent";
import TimeDisplay from "./components/TimeDisplay";

function App() {
  return (
    <div >
      <TimeDisplay />
      <FetchComponent />
      <DisplayOnLoad />
      {/* <DisplayOnLoadForm /> */}
    </div>
  );
}

export default App;
