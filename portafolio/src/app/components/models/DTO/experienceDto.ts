import { Experience } from "../experience";

export interface DtoExperience extends  Omit<Experience,"id_experience">{}
