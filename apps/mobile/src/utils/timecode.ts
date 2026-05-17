export function getTodTimecode(fps: number): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  const milliseconds = now.getMilliseconds();
  const frames = Math.floor((milliseconds / 1000) * fps).toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}:${frames}`;
}
