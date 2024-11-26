// app/supervisor/page.tsx
"use client";

import { useState } from "react";
import Room from "../../components/Room"; // Import the Room component
import { rooms } from "../services/roomService";

export default function SupervisorDashboard() {
  const user = "Christian Tannahill";
  const [roomData] = useState<[]>([
    // Task data...
  ]);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const handleRoomSelect = (room: number) => {
    setSelectedRoom(room);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Supervisor Dashboard - {user}</h1>

      {/* Room cards */}
      <div className="grid grid-cols-3 gap-4">
        {rooms
          // .filter((ra) => ra.assignedTo === user)
          .map((room) => (
            <div
              key={room.id}
              onClick={() => handleRoomSelect(Number(room.id))}
              className={`cursor-pointer p-4 rounded-lg shadow-md transition duration-200 text-black ${
                room.isCompleted === true
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-xl font-bold">{room.id}</h3>
              <p className="text-sm">{room.assignedTo}</p>

              <p className="text-sm">{room.weekdayCleaned}</p>
              <small>{room.isCompleted ? "Completed" : "Not Completed"}</small>
            </div>
          ))}
      </div>

      {selectedRoom && (
        <Room
          room={rooms.find((ra) => Number(ra.id) === selectedRoom)}
          close={() => setSelectedRoom(null)}
          userRole="supervisor"
          user={user}
          onComplete={}
        />
      )}
    </div>
  );
}
