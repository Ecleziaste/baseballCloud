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
  type?: string | undefined;
  date?: string | undefined;
  offset?: number | undefined;
};
