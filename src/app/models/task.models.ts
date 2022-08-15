export interface Task {
  order: number;
  duration: number;
  contractor: number;
  billable_flag: boolean;
  date: Date;
  project: string;
  product: number;
  activity: number;
  description: string;
  category: number;
  client: string;
}
