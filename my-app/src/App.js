import "./App.css";
import HellowWorld from "./01_HelloWorld";
import IntroduceJSX from "./02_IntroduceJSX";
import ElementRendering from "./03_ElementRendering";
import ComponentComb from "./04_ComponentComb";
import StateAndLifecycle from "./05_StateAndLifecycle";
import EventHandling from "./06_EventHandling";
import ConditionalRendering from "./07_ConditionalRendering";
import ListAndKeys from "./08_ListAndKeys";
import ControlledComponent from "./09_ControlledComponent";
import MultiInputControl from "./09_MultiInputControl";
import Calculator from "./10_Calculator";
function App() {
  return (
    <div className="App">
      <HellowWorld />
      <IntroduceJSX />
      <ElementRendering />
      <ComponentComb />
      <StateAndLifecycle />
      <EventHandling />
      <ConditionalRendering />
      <ListAndKeys />
      <ControlledComponent />
      <MultiInputControl />
      <Calculator />
    </div>
  );
}

export default App;
