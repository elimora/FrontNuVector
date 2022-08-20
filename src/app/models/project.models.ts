import { Client } from './client.model';

export interface Project {
  id: string;
  name: string;
  description: string;
  active: boolean;
  client: Client;
}
