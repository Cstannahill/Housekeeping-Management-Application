"use client";

import { useState, useEffect } from "react";
import Room from "../../components/Room";
import { fetchRooms } from "../services/roomService";
import { RoomModel } from "@/types/RoomType";

export default function HousekeeperDashboard() {
  const user = "John Doe";
  const [rooms, setRooms] = useState<RoomModel[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<RoomModel[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("assigned");

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const fetchedRooms = await fetchRooms();
        // console.log(fetchedRooms);
        setRooms([...fetchedRooms]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setLoading(false);
      }
    };

    loadRooms();
  }, []);

  useEffect(() => {
    const currentDay = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });

    let filtered = rooms;
    if (filter === "assigned") {
      filtered = rooms.filter((room) => room.assignedTo === user);
    } else if (filter === "weekday") {
      filtered = rooms.filter(
        (room) => room.assignedTo === user && room.weekdayCleaned === currentDay
      );
    }

    setFilteredRooms(filtered);
  }, [rooms, filter]);

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId);
  };

  const handleRoomCompletion = (updatedRoom: RoomModel) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === updatedRoom.id ? { ...room, isCompleted: true } : room
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Housekeeper Dashboard</h1>

      {/* Filter dropdown */}
      <div className="mb-4">
        <label htmlFor="filter" className="mr-4 text-sm">
          View:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded text-gray-500 w-full"
        >
          <option value="all">All Rooms</option>
          <option value="assigned">Assigned to Me</option>
          <option value="weekday">{"Today's Rooms"}</option>
        </select>
      </div>

      {/* Room cards */}
      <div className="grid grid-cols-3 gap-4">
        {filteredRooms &&
          filteredRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => handleRoomSelect(String(room.id))}
              className={`cursor-pointer p-4 rounded-lg shadow-md transition duration-200 ${
                room.isCompleted === true
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-xl font-bold">{room.id}</h3>
              <p className="text-sm">
                {room.isCompleted ? "Completed" : "Not Complete"}
              </p>
            </div>
          ))}
      </div>

      {/* Room detail view */}
      {selectedRoom && (
        <Room
          room={rooms.find(
            (room) =>
              room.id === selectedRoom || String(room.id) === selectedRoom
          )}
          close={() => setSelectedRoom(null)}
          userRole="housekeeper"
          user={user}
          onComplete={handleRoomCompletion}
        />
      )}
    </div>
  );
}
