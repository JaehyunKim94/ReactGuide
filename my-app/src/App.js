import "./App.css";
import HellowWorld from "./01_HelloWorld";
import IntroduceJSX from "./02_IntroduceJSX";
import ElementRendering from "./03_ElementRendering";
import ComponentComb from "./04_ComponentComb";
import StateAndLifecycle from "./05_StateAndLifecycle";
import EventHandling from "./06_EventHandling";
import ConditionalRendering from "./07_ConditionalRendering";
import ListAndKeys from "./08_ListAndKeys";
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
    </div>
  );
}

export default App;
