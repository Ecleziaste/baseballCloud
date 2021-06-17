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
  profiles_count?: number | undefined;
  offset?: number | undefined;
};

export type LeaderCardType = {
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
  teams: Array<Team> | [];
  favorite: boolean;
};
