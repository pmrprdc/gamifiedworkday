import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MatrixEffect from "./components/MatrixEffect";
import PrivatePage from "./components/PRIVATE/PrivatePage";
import SalesPage from "./components/SALES/SalesPage";
import CheckoutPage from "./components/CHECKOUT/CheckoutPage";
import LoginPage from "./components/LOGIN/LoginPage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

function App() {
  const [count, setCount] = useState(0);

  const [taskBatches, setTaskBatches] = useState([]);
  const [savedTimedTasks, setSavedTimedTasks] = useState([]);

  const [selectedBatch, setSelectedBatch] = useState(null);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  };

  const startTimer = () => {
    if (selectedBatch && currentTaskIndex < selectedBatch.tasks.length) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (selectedBatch && currentTaskIndex < selectedBatch.tasks.length) {
      const currentTask = selectedBatch.tasks[currentTaskIndex];
      setSavedTimedTasks((prevTasks) => [
        ...prevTasks,
        {
          batch: selectedBatch.name,
          taskName: currentTask.name,
          taskColor: currentTask.color,
          duration: elapsedTime,
        },
      ]);
      setCurrentTaskIndex((prevIndex) => prevIndex + 1);
      setElapsedTime(0);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCurrentTaskIndex(0);
    setElapsedTime(0);
  };

  const handleBatchChange = (e) => {
    const selectedBatchName = e.target.value;
    const batch = taskBatches.find((batch) => batch.name === selectedBatchName);
    setSelectedBatch(batch); // This should update the selectedBatch in App's state
    resetTimer(); // Reset timer whenever a new batch is selected
  };
  

  const handleTaskBatchAdd = (batchName, newTasks) => {
    const timestamp = new Date().toLocaleString();
    const batchWithTimestamp = {
      name: batchName,
      tasks: newTasks,
      timestamp,
    };
    setTaskBatches([...taskBatches, batchWithTimestamp]);
  };

  const handleTaskBatchDelete = (batchIndex) => {
    const updatedBatches = taskBatches.filter((_, index) => index !== batchIndex);
    setTaskBatches(updatedBatches);
  };

  const handleSavedTimedTask = (timedTask) => {
    setSavedTimedTasks([...savedTimedTasks, timedTask]);
  };

  const handleTaskBatchSave = (updatedBatch) => {
    const updatedBatches = taskBatches.map((batch) => {
      if (batch.name === updatedBatch.name) {
        return updatedBatch;
      }
      return batch;
    });
    setTaskBatches(updatedBatches);
  };

  return (
    <div style={{ position: "relative" }}>
      <MatrixEffect />
      <BrowserRouter>
        <nav style={{ position: "relative", border: "2px solid red", zIndex: "1" }}>
          <Link to="/private">Private</Link> |
          <Link to="/sales">Sales</Link> |
          <Link to="/checkout">Checkout</Link> |
          <Link to="/login">Log in</Link>
        </nav>
        <Routes>
          <Route
            path="/private"
            element={
              <PrivatePage
                count={count}
                setCount={setCount}
                taskBatches={taskBatches}
                setTaskBatches={setTaskBatches}
                savedTimedTasks={savedTimedTasks}
                onTaskBatchAdd={handleTaskBatchAdd}
                onTaskBatchDelete={handleTaskBatchDelete}
                onSavedTimedTask={handleSavedTimedTask}
                selectedBatch={selectedBatch}
                setSelectedBatch={setSelectedBatch}
                currentTaskIndex={currentTaskIndex}
                setCurrentTaskIndex={setCurrentTaskIndex}
                elapsedTime={elapsedTime}
                setElapsedTime={setElapsedTime}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                startTimer={startTimer}
                stopTimer={stopTimer}
                resetTimer={resetTimer}
                handleBatchChange={handleBatchChange}
              />
            }
          />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
