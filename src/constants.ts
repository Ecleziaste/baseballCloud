export const API_URL = "https://baseballcloud-back.herokuapp.com/api/v1";

export const OPTIONS = {
  date: [
    { fieldName: "date", text: "All" },
    { fieldName: "date", text: "Last Week", payload: "last_week" },
    { fieldName: "date", text: "Last Month", payload: "last_month" },
  ],
  position: [
    { fieldName: "position", text: "All" },
    { fieldName: "position", text: "Catcher", payload: "catcher" },
    { fieldName: "position", text: "First Base", payload: "first_base" },
    { fieldName: "position", text: "Second Base", payload: "second_base" },
    { fieldName: "position", text: "Shortstop", payload: "shortstop" },
    { fieldName: "position", text: "Third Base", payload: "third_base" },
    { fieldName: "position", text: "Outfield", payload: "outfield" },
    { fieldName: "position", text: "Pitcher", payload: "pitcher" },
  ],
  favorite: [
    { fieldName: "favorite", text: "All" },
    { fieldName: "favorite", text: "Favorite", payload: 1 },
  ],
  batting: [
    {
      fieldName: "type",
      text: "Exit Velocity",
      payload: "exit_velocity",
    },
    {
      fieldName: "type",
      text: "Carry Distance",
      payload: "carry_distance",
    },
  ],
  pitching: [
    {
      fieldName: "type",
      text: "Pitch Velocity",
      payload: "pitch_velocity",
    },
    { fieldName: "type", text: "Spin Rate", payload: "spin_rate" },
  ],
  profiles_count: [
    { fieldName: "profiles_count", text: "10", payload: 10 },
    { fieldName: "profiles_count", text: "15", payload: 15 },
    { fieldName: "profiles_count", text: "25", payload: 25 },
  ],
  throws: [
    { fieldName: "throws", text: "L", payload: "l" },
    { fieldName: "throws", text: "R", payload: "r" },
  ],
  bats: [
    { fieldName: "bats", text: "L", payload: "l" },
    { fieldName: "bats", text: "R", payload: "r" },
  ],
  school: [
    { fieldName: "school", text: "FSU", payload: { id: "2", name: "FSU" } },
    {
      fieldName: "school",
      text: "Rockledge",
      payload: { id: "3", name: "Rockledge" },
    },
    { fieldName: "school", text: "Good", payload: { id: "4", name: "Good" } },
    {
      fieldName: "school",
      text: "Hogwarts",
      payload: { id: "22", name: "Hogwarts" },
    },
    {
      fieldName: "school",
      text: "SpacemarineCorp",
      payload: { id: "22", name: "SpacemarineCorp" },
    },
  ],
  school_year: [
    { fieldName: "school_year", text: "Freshman", payload: "freshman" },
    { fieldName: "school_year", text: "Sophomore", payload: "sophomore" },
    { fieldName: "school_year", text: "Junior", payload: "junior" },
    { fieldName: "school_year", text: "Senior", payload: "senior" },
    { fieldName: "school_year", text: "None", payload: "none" },
  ],
  team: [
    {
      fieldName: "team",
      text: "scorps",
      payload: { id: "6", name: "scorps" },
    },
  ],
  facility: [
    {
      fieldName: "facility",
      text: "Example",
      payload: { id: "32", u_name: "Example" },
    },
  ],
};
