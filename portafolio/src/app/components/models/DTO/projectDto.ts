import { Project } from "../project";

export interface DtoProject extends Omit<Project, "id_project">{}