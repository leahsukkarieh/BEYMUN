import { Member } from "./member";

export type Committee = {
    id: number;
    name: string;
    topic: string;
    description: string;
    image: string;
    diasMembers? : Member[];
  };