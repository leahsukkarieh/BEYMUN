export type Committee = {
    id: number;
    name: string;
    topic: string;
    description: string;
    image: string;
    chairperson?: string,
    director?: string,
    rapporteur?: string,
    chairpersonImg?: string,
    directorImg?: string,
    rapporteurImg?: string,
  };