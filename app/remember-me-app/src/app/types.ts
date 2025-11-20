export interface Goal {
  id?: number;
  name: string;
  duration: string;
  alertTime: string;
  done: boolean;
  elapsed: number;
  notifId?: string | null;
}
