export type RoomProps = {
  room: RoomModel | undefined;
  close: () => void;
  userRole: "housekeeper" | "supervisor";
  onComplete?: (updatedRoom: RoomModel) => void;
  user: string;
};

export type TaskList = {
  task: string;
  isComplete: boolean;
}[];

export type RoomModel = {
  id?: string;
  isCompleted: boolean;
  notes: string;
  assignedTo?: string;
  cleanedBy?: string;
  weekdayCleaned: string;
  lastCleaned?: string;
  tasklist?: TaskList;
};
