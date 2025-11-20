export function hhmmssToSeconds(hhmmss: string) {
  const [hours, minutes, seconds] = hhmmss.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export function secondsToHHMMSS(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function nextTriggerDateFromHHMM(hhmm: string) {
  const now = new Date();
  const [hours, minutes] = hhmm.split(":").map(Number);
  const nextTriggerDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    0
  );
  if (nextTriggerDate < now) {
    nextTriggerDate.setDate(nextTriggerDate.getDate() + 1);
  }
  return nextTriggerDate;
}
