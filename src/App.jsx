import ProgressBar from "./ProgressBar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full bg-gray-500">
      <h1 className="text-5xl text-teal-300">Star Rating System</h1>
      <ProgressBar />
    </div>
  );
}

export default App;
