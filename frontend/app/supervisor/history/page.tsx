"use client";

import { useState } from "react";
import {
  ref,
  query,
  orderByChild,
  equalTo,
  get,
  DatabaseReference,
  Query,
} from "firebase/database";
import dynamic from "next/dynamic";
import { database } from "../../../firebaseConfig";
import { Column } from "react-table";

const DataTable = dynamic(() => import("../../../components/DataTable"), {
  loading: () => <p>Loading table...</p>,
  ssr: false,
});

type Task = {
  id: string;
  description: string;
  assignedTo: string;
  room: string;
  status: string;
  date: string;
};

export default function HistoryPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState({
    room: "",
    housekeeper: "",
    date: "",
  });

  const columns: Column<Task>[] = [
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Room",
      accessor: "room",
    },
    {
      Header: "Assigned To",
      accessor: "assignedTo",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Date",
      accessor: "date",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const searchTasks = async () => {
    const tasksRef: DatabaseReference = ref(database, "tasks/");
    let searchQuery: Query = tasksRef;

    if (filter.room) {
      searchQuery = query(tasksRef, orderByChild("room"), equalTo(filter.room));
    } else if (filter.housekeeper) {
      searchQuery = query(
        tasksRef,
        orderByChild("assignedTo"),
        equalTo(filter.housekeeper)
      );
    } else if (filter.date) {
      searchQuery = query(tasksRef, orderByChild("date"), equalTo(filter.date));
    }

    const snapshot = await get(searchQuery);
    const data = snapshot.val();
    const taskArray = data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
      : [];
    setTasks(taskArray);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Search Task History
      </h1>

      {/* Search form */}
      <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">Search Criteria</h2>
        <input
          type="text"
          name="room"
          placeholder="Search by Room"
          value={filter.room}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 border rounded-md"
        />
        <input
          type="text"
          name="housekeeper"
          placeholder="Search by Housekeeper"
          value={filter.housekeeper}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 border rounded-md"
        />
        <input
          type="date"
          name="date"
          placeholder="Search by Date"
          value={filter.date}
          onChange={handleInputChange}
          className="w-full p-2 mb-2 border rounded-md"
        />
        <button
          onClick={searchTasks}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Display the search results using the DataTable component */}
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
        <DataTable columns={columns} data={tasks} />
      </div>
    </div>
  );
}
