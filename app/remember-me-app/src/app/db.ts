import * as SQLite from "expo-sqlite";
import { Goal } from "./types";

const db = SQLite.openDatabaseSync("goals.db");

export async function init() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS goals (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      name TEXT NOT NULL,
      duration TEXT NOT NULL,
      alertTime TEXT NOT NULL,
      done INTEGER DEFAULT 0 NOT NULL,
      elapsed INTEGER DEFAULT 0 NOT NULL,
      notifId TEXT NULL
    );
  `);
}
export async function addGoalDB(goal: Goal): Promise<number> {
  const result = await db.runAsync(
    `INSERT INTO goals (name, duration, alertTime, done, elapsed, notifId)
     VALUES (?, ?, ?, ?, ?, ?);`,
    [
      goal.name,
      goal.duration,
      goal.alertTime,
      goal.done,
      goal.elapsed,
      goal.notifId ?? null,
    ]
  );

  return result.lastInsertRowId!;
}

export async function updateGoalDB(goal: Goal) {
  await db.runAsync(
    `UPDATE goals 
     SET name = ?, duration = ?, alertTime = ?, done = ?, elapsed = ?, notifId = ?
     WHERE id = ?;`,
    [
      goal.name,
      goal.duration,
      goal.alertTime,
      goal.done,
      goal.elapsed,
      goal.notifId ?? null,
    ]
  );
}

export async function deleteGoalDB(id: number) {
  await db.runAsync("DELETE FROM goals WHERE id = ?;", [id]);
}

export async function getGoalsDB(): Promise<Goal[]> {
  const rows = await db.getAllAsync<Goal>("SELECT * FROM goals;");
  return rows;
}

export function toggleDoneDB(id: number) {
  db.runAsync("UPDATE goals SET done = NOT done WHERE id = ?;", [id]);
}
