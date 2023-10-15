import "./App.css";
import AsyncParagraph from "./components/AsyncParagraph";
import CommentList from "./components/CommentList";
import List from "./components/List";

function App() {
  const loadData = () => {
    return new Promise((resolve, reject) => {
      resolve("Data!");
    });
  };

  return (
    <>
      <h1>List Exercise</h1>
      <List items={["A", "B", "C"]} />
      <h1>Async Exercise</h1>
      <AsyncParagraph dataVersion={10} loadData={loadData} />
      <h1>Comment Exercise</h1>
      <CommentList />
    </>
  );
}

export default App;
