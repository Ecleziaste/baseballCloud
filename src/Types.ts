export type Options = {
  fieldName?: string | undefined;
  text: string;
  payload?: string | number | null | undefined;
};

export type School = {
  id: string;
  name: string;
};

export type Team = {
  id: string;
  name: string;
};

export type Facility = {
  id: string;
  email: string;
  u_name: string;
};

export type LeaderboardSelects = {
  team?: string | undefined;
  school?: string | undefined;
  position?: string | undefined;
  age?: number | undefined;
  favorite?: number | undefined;
  type: string;
  date?: string | undefined;
  offset?: number | undefined;
};

export type ProfilesSelects = {
  player_name?: string | undefined;
  team?: string | undefined;
  school?: string | undefined;
  position?: string | undefined;
  age?: number | undefined;
  favorite?: number | undefined;
  profiles_count: number ;
  offset: number;
};

export type BatterCardType = {
  batter_name: string;
  exit_velocity: number;
  launch_angle: number;
  distance: number;
  batter_datraks_id: number;
  age: number;
  school: School;
  teams: Array<Team>;
  favorite: false;
};

export type PlayerCard = {
  id: string;
  first_name: string;
  last_name: string;
  position: string;
  position2: string;
  school_year: number | null;
  feet: number;
  inches: number;
  weight: number;
  age: number;
  events: [];
  school: School | null;
  teams: Array<Team> | null;
  favorite: boolean;
};

export type PitchingType = {
  pitcher_name: string;
  pitch_type: string;
  velocity: number;
  spin_rate: number;
  vertical_break: number | null;
  horizontal_break: number | null;
  pitcher_datraks_id: number;
  age: number;
  school: School;
  teams: Array<Team>;
  favorite: boolean;
};

export type CurrentProfile = {
  id: string;
  // раньше по факту приходил намбер в пейлоаде экшена
  first_name: string;
  last_name: string;
  position: string;
  position2: string | null;
  avatar: string;
  throws_hand: string;
  bats_hand: string;
  biography: string;
  school_year: string;
  feet: number;
  inches: number;
  weight: number;
  age: number;
  school: School;
  teams: Array<Team>;
  facilities: Array<Facility>;
  // recent_events: [] | null;
};

export type UpdateProfileSelects = {
  age: number | undefined;
  avatar: string | undefined;
  bats_hand: string | undefined;
  biography: string | undefined;
  facilities: Array<Facility> | [];
  feet: number | undefined;
  first_name: string | undefined;
  id: string | number | undefined;
  inches: number | undefined;
  last_name: string | undefined;
  position: string | undefined;
  position2: string | undefined;
  school: School | {};
  school_year: string | undefined;
  teams: Array<Team> | [];
  throws_hand: string | undefined;
  weight: number | undefined;
};

export type Profile = {
  act_score: null;
  age: number;
  avatar: string;
  bats_hand: string;
  batter_summary: [];
  batting_top_values: [];
  biography: string;
  broad_jump: null;
  events_opened: true;
  facilities: Array<Facility>;
  favorite: boolean;
  feet: number;
  first_name: string;
  gpa_score: null;
  grip_left: null;
  grip_right: null;
  id: string;
  inches: number;
  last_name: string;
  paid: boolean;
  pitcher_summary: [];
  pitching_top_values: [];
  position: string;
  position2: string | null;
  recent_events: [];
  sat_score: null;
  school: { id: string; name: string };
  school_year: string;
  teams: Array<Team>;
  throws_hand: string;
  weight: number;
  winsgspan: null;
  wrist_to_elbow: null;
};

export type Favorite = { profile_id: string; favorite: boolean };

export type IsUpdated = {
  update_favorite_profile: { favorite: boolean };
};
