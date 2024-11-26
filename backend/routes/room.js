const express = require("express");
const router = express.Router();
const { db } = require("../firebaseConfig"); // Import Firestore

// POST: Mark room as completed
router.post("/complete-room", async (req, res) => {
  const { roomId, housekeeper, completionTime, taskList } = req.body;

  try {
    // Reference to the room document in Firestore
    const roomRef = db.collection("rooms").doc(roomId);

    // Update room data in Firestore
    await roomRef.update({
      status: "Completed",
      lastCleaned: completionTime,
      cleanedBy: housekeeper,
      tasklist: taskList,
    });

    res.status(200).json({ message: "Room marked as complete" });
  } catch (error) {
    console.error("Error completing room:", error);
    res.status(500).json({ message: "Error completing room" });
  }
});

// GET: Fetch all rooms (for dashboard display)
router.get("/rooms", async (req, res) => {
  try {
    const roomsSnapshot = await db.collection("rooms").get();
    const rooms = roomsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Error fetching rooms" });
  }
});

module.exports = router;
