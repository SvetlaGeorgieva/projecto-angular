export interface Task {
  id: number;
  type: 'Story' | 'Bug';
  title: string;
  description: string;
  assignee: string;
  priority: 'Low' | 'Normal' | 'High' | 'Critical';
  status: 'To Do' | 'In Progress' | 'Ready for Test' | 'Done';
  estimate: number;
  createdAt: string;
}
