// export interface Task {
//   id: string;
//   order: number;
//   duration: number;
//   contractor: number;
//   billable_flag: boolean;
//   date: Date;
//   project: string;
//   product: number;
//   activity: number;
//   description: string;
//   category: number;
//   client: string;
// }

import { Activity } from './activity.model';
import { Category } from './category.model';
import { Client } from './client.model';
import { Contractor } from './contractors.models';
import { Products } from './products.models';
import { Project } from './project.models';

export interface Task {
  id: string;
  //order: number;
  duration: number;
  contractor: Contractor;
  billable_flag: boolean;
  date: Date;
  project: Project;
  product: Products;
  activity: Activity;
  description: string;
  category: Category;
  client: Client;
}
