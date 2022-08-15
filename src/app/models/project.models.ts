export interface Project {
  name: string;
  description: string;
  active: boolean;
  client: {
    id: string;
  };
}
