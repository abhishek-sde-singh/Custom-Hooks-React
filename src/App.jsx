import { useIsOnline } from "./Hooks/useIsOnline";
import { useIsActiveTab } from "./Hooks/useIsTabActive";
import useMousePointer from "./Hooks/useMousePointer";

function App() {
  const isOnline = useIsOnline();
  const isTabActive = useIsActiveTab();
  const position = useMousePointer();

  return (
    <>
      <div>{isOnline ? <h1>You are online</h1> : <h1>You are offline</h1>}</div>
      <div>
        {isTabActive ? (
          <h2>You are currently active on this tab</h2>
        ) : (
          <h2>You are not active on this tab</h2>
        )}
      </div>
      <div>
        Mouse position x: {position.x} y: {position.y}
      </div>
    </>
  );
}

export default App;
