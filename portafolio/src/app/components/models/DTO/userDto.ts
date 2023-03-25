import { User } from "../user";

export interface DtoUser extends Omit<User, "id_user">{}