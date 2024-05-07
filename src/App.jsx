import { PageContent } from "./components/PageContent";
import { Nav } from "./components/Nav";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export function App() {
  const { isLoading } = useContext(AppContext);
  return (
    <div className="container">
      { isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Nav />
          <PageContent />
        </>
      )}
    </div>
  );
}
