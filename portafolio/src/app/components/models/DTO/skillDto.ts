import { Skill } from "../skill";

export interface DtoSkill extends Omit<Skill,"id_skill">{}