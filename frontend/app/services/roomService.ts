import { RoomModel } from "@/types/RoomType";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // Make sure your Firestore instance is imported
export const rooms: RoomModel[] = [
  {
    id: "101",
    isCompleted: false,
    notes: "Does own laundry.",
    assignedTo: "John Doe",
    weekdayCleaned: "Thursday",
    lastCleaned: "1/14/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "102",
    isCompleted: false,
    notes: "Out of room at lunch time.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Saturday",
    lastCleaned: "9/26/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "103",
    isCompleted: false,
    notes: "Has pets, be careful.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Wednesday",
    lastCleaned: "10/27/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "104",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Friday",
    lastCleaned: "11/24/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "105",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Tuesday",
    lastCleaned: "7/25/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "106",
    isCompleted: false,
    notes: "Has pets, be careful.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Friday",
    lastCleaned: "8/11/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "107",
    isCompleted: false,
    notes: "Out of room at lunch time.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Saturday",
    lastCleaned: "2/5/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "108",
    isCompleted: false,
    notes: "Out of room at lunch time.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Friday",
    lastCleaned: "9/10/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "109",
    isCompleted: false,
    notes: "Out of room at lunch time.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Tuesday",
    lastCleaned: "7/15/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "110",
    isCompleted: false,
    notes: "Has pets, be careful.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Sunday",
    lastCleaned: "7/17/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "111",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Saturday",
    lastCleaned: "10/25/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "112",
    isCompleted: false,
    notes: "Prefers late cleaning.",
    assignedTo: "John Doe",
    weekdayCleaned: "Sunday",
    lastCleaned: "4/17/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "113",
    isCompleted: false,
    notes: "Does own laundry.",
    assignedTo: "John Doe",
    weekdayCleaned: "Wednesday",
    lastCleaned: "6/6/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "114",
    isCompleted: false,
    notes: "Sensitive to strong cleaning products.",
    assignedTo: "John Doe",
    weekdayCleaned: "Thursday",
    lastCleaned: "10/4/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "115",
    isCompleted: false,
    notes: "Prefers late cleaning.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Monday",
    lastCleaned: "3/4/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "116",
    isCompleted: false,
    notes: "Has pets, be careful.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Saturday",
    lastCleaned: "12/14/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "117",
    isCompleted: false,
    notes: "Sensitive to strong cleaning products.",
    assignedTo: "John Doe",
    weekdayCleaned: "Sunday",
    lastCleaned: "1/12/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "118",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "John Doe",
    weekdayCleaned: "Friday",
    lastCleaned: "7/5/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "119",
    isCompleted: false,
    notes: "Prefers late cleaning.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Saturday",
    lastCleaned: "3/10/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "120",
    isCompleted: false,
    notes: "Does own laundry.",
    assignedTo: "John Doe",
    weekdayCleaned: "Tuesday",
    lastCleaned: "6/18/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "121",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "John Doe",
    weekdayCleaned: "Wednesday",
    lastCleaned: "3/16/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "122",
    isCompleted: false,
    notes: "Prefers late cleaning.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Sunday",
    lastCleaned: "10/15/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "123",
    isCompleted: false,
    notes: "Does own laundry.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Sunday",
    lastCleaned: "5/1/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "124",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "John Doe",
    weekdayCleaned: "Monday",
    lastCleaned: "4/22/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "125",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "John Doe",
    weekdayCleaned: "Monday",
    lastCleaned: "5/13/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "126",
    isCompleted: false,
    notes: "Does own laundry.",
    assignedTo: "John Doe",
    weekdayCleaned: "Friday",
    lastCleaned: "8/12/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "127",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "John Doe",
    weekdayCleaned: "Sunday",
    lastCleaned: "2/3/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "128",
    isCompleted: false,
    notes: "Has pets, be careful.",
    assignedTo: "Alice Johnson",
    weekdayCleaned: "Tuesday",
    lastCleaned: "11/2/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "129",
    isCompleted: false,
    notes: "Needs extra towels.",
    assignedTo: "John Doe",
    weekdayCleaned: "Tuesday",
    lastCleaned: "4/1/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
  {
    id: "130",
    isCompleted: false,
    notes: "Has pets, be careful.",
    assignedTo: "John Doe",
    weekdayCleaned: "Monday",
    lastCleaned: "9/22/24",
    tasklist: [
      {
        task: "Mop",
        isComplete: false,
      },
      {
        task: "Vacuum",
        isComplete: false,
      },
      {
        task: "Clean windows",
        isComplete: false,
      },
      {
        task: "Dust furniture",
        isComplete: false,
      },
      {
        task: "Sanitize bathroom",
        isComplete: false,
      },
      {
        task: "Change linens",
        isComplete: false,
      },
      {
        task: "Restock toiletries",
        isComplete: false,
      },
      {
        task: "Empty trash",
        isComplete: false,
      },
    ],
  },
];

export const fetchRooms = async () => {
  const roomsCollection = collection(db, "rooms");
  const roomsSnapshot = await getDocs(roomsCollection);

  const roomsList = roomsSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      isCompleted: false,
      notes: data.notes || "",
      weekdayCleaned: data.weekdayCleaned || "Not Assigned",
      ...data,
    };
  });

  return roomsList;
};
