import { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setProgress((prev) => (prev < 100 ? prev + 1 : prev));
  //     }, 100);

  //     return () => clearInterval(interval);
  //   }, []);

  const handleStart = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : prev));
      }, 100);
    }
  };

  const handlePause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    handlePause();
    setProgress(0);
  };
  return (
    <>
      <div className="mb-2 text-lg font-semibold">Progress: {progress}%</div>
      <div className="border-2 w-[600px] h-6 bg-gray-200">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex mt-4">
        <button onClick={handleStart} className="text-xl bg-red-300 p-2 ml-4">
          Start
        </button>
        <button onClick={handlePause} className="text-xl bg-red-300 p-2 ml-4">
          Pause
        </button>
        <button onClick={handleReset} className="text-xl bg-red-300 p-2 ml-4">
          Reset
        </button>
      </div>
    </>
  );
};

export default ProgressBar;
