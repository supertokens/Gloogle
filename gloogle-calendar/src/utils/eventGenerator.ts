const EVENT_TITLES = [
  "Team Standup",
  "Product Review",
  "Client Meeting",
  "Code Review",
  "Design Workshop",
  "Marketing Sync",
  "1:1 with Manager",
];

const LOCATIONS = [
  "Meeting Room A",
  "Conference Room B",
  "Virtual",
  "Design Lab",
  "Cafeteria",
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function formatTime(hours: number, minutes: number): string {
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

export function generateEvents(date: Date) {
  const events = [];
  const eventCount = Math.floor(Math.random() * 4) + 4; // 4 to 7 events
  const usedTimes = new Set<number>();

  while (events.length < eventCount) {
    // Generate random time between 9 AM (9) and 7 PM (19)
    const hours = Math.floor(Math.random() * 10) + 9;
    const minutes = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, or 45
    const timeValue = hours * 60 + minutes;

    // Ensure no time slot overlap
    if (!usedTimes.has(timeValue)) {
      usedTimes.add(timeValue);
      events.push({
        id: events.length + 1,
        title: getRandomItem(EVENT_TITLES),
        date: date.toISOString().split("T")[0],
        time: formatTime(hours, minutes),
        description: "Team sync and updates",
        attendees: ["team@gloogle.com"],
        location: getRandomItem(LOCATIONS),
      });
    }
  }

  // Sort events by time
  return events.sort((a, b) => {
    const timeA = a.time.split(" ")[0].split(":").map(Number);
    const timeB = b.time.split(" ")[0].split(":").map(Number);
    const periodA = a.time.split(" ")[1];
    const periodB = b.time.split(" ")[1];

    let hoursA = timeA[0] + (periodA === "PM" && timeA[0] !== 12 ? 12 : 0);
    let hoursB = timeB[0] + (periodB === "PM" && timeB[0] !== 12 ? 12 : 0);

    if (hoursA === hoursB) {
      return timeA[1] - timeB[1];
    }
    return hoursA - hoursB;
  });
}
