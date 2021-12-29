export interface Skill {
  name: string;
  stars: number;
}

export interface Domain {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techs: string[];
}

export interface NormalizedData<T> {
  byId: { [id: string]: T };
  allIds: string[];
}

export interface NavLink {
  title: string;
  location: string;
  external: boolean;
}