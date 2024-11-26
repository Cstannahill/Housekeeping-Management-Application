import { useState } from "react";
import { RoomModel } from "../types/RoomType"; // Import the relevant types
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Firestore configuration

type RoomProps = {
  room: RoomModel | undefined; // Ensure room can be undefined
  close: () => void;
  userRole: "housekeeper" | "supervisor"; // Add userRole for conditional logic
  user: string; // Pass the user
  onComplete: (updatedRoom: RoomModel) => void; // Add completion handler
};

const Room = ({ room, close, userRole, user, onComplete }: RoomProps) => {
  const [tasks, setTasks] = useState([
    { task: "Dust Apartment", isCompleted: false },
    { task: "Empty All Trash", isCompleted: false },
    { task: "Sanitize Switches/Handles", isCompleted: false },
    { task: "Vacuum Apartment", isCompleted: false },
    { task: "Kit. Sink, Counter, Cabinets", isCompleted: false },
    { task: "Microwave/Fridge", isCompleted: false },
    { task: "Kitchen Floor", isCompleted: false },
    { task: "Bathroom Vanity/Sink", isCompleted: false },
    { task: "Mirrors", isCompleted: false },
    { task: "Shower", isCompleted: false },
    { task: "Toilet", isCompleted: false },
    { task: "Bathroom Floor", isCompleted: false },
    { task: "Carpet Spots", isCompleted: false },
    { task: "Clean PTAC", isCompleted: false },
    { task: "Sanitize Trash Cans", isCompleted: false },
    { task: "Swiffer Bath Vent", isCompleted: false },
    { task: "Wash Windows", isCompleted: false },
  ]);
  const [cleaningStarted, setCleaningStarted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  if (!room) {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <p>No room details available.</p>
          <button
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={close}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const formatTimestamp = (timestamp: Timestamp | null | undefined) => {
    if (!timestamp) return "Unknown Date";
    const date = timestamp.toDate();
    return date.toLocaleString();
  };

  const handleTaskToggle = (index: number) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const handleStartCleaning = async () => {
    const start = new Date();
    setStartTime(start);
    setCleaningStarted(true);

    // Add a start record to roomHistory
    const roomHistoryRef = doc(
      db,
      "roomHistory",
      `${room.id}-${start.toISOString()}`
    );
    await setDoc(roomHistoryRef, {
      roomId: room.id,
      housekeeper: user,
      startTime: start.toISOString(),
      status: "Started",
    });
  };

  const handleRoomComplete = async () => {
    const completionTime = new Date().toISOString();

    const updatedRoom = {
      ...room,
      status: "Completed",
      lastCleaned: completionTime,
      isCompleted: true,
    };

    const roomHistoryRef = doc(
      db,
      "roomHistory",
      `${room.id}-${completionTime}`
    );
    await setDoc(roomHistoryRef, {
      roomId: room.id,
      housekeeper: user,
      startTime: startTime?.toISOString() || "Unknown",
      completionTime: completionTime,
      tasklist: tasks,
      status: "Completed",
    });

    onComplete(updatedRoom);
    close();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          Room Details: {room.id || "Unknown Room"}
        </h2>
        <p className="text-sm">
          Assigned to: {room.assignedTo || "Not Assigned"}
        </p>
        <p className="text-sm">
          Status: {room.isCompleted ? "Completed" : "Not Completed"}
        </p>
        {room.lastCleaned && (
          <p className="text-sm">
            Last Cleaned:{" "}
            {formatTimestamp(room.lastCleaned as unknown as Timestamp)}
          </p>
        )}
        <p className="text-sm">Notes: {room.notes || "No Notes"}</p>

        {userRole === "housekeeper" && !cleaningStarted && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={handleStartCleaning}
          >
            Start Cleaning
          </button>
        )}

        {cleaningStarted && (
          <>
            <h3 className="text-lg font-bold mb-2">Task List:</h3>
            <ul className="max-h-64 overflow-y-auto">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => handleTaskToggle(index)}
                    className="mr-2"
                  />
                  <span className={task.isCompleted ? "line-through" : ""}>
                    {task.task}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={handleRoomComplete}
            >
              Finish Cleaning
            </button>
          </>
        )}

        <button
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md float-right"
          // style={{ marginLeft: "10vw" }}
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Room;
