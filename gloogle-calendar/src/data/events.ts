export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  attendees: string[];
  location?: string;
}

export const events: CalendarEvent[] = [
  {
    id: 1,
    title: "Team Standup",
    date: "2024-03-20",
    time: "10:00 AM",
    description: "Daily team sync meeting",
    attendees: ["team@gloogle.com"],
    location: "Meeting Room A",
  },
  {
    id: 2,
    title: "Lunch with Bob",
    date: "2024-03-20",
    time: "12:30 PM",
    description: "Quarterly catch-up",
    attendees: ["bob@company.com"],
    location: "Cafe Nero",
  },
  {
    id: 3,
    title: "Product Review",
    date: "2024-03-21",
    time: "11:00 AM",
    description: "Q1 product roadmap review",
    attendees: ["product@gloogle.com", "design@gloogle.com"],
    location: "Conference Room B",
  },
  {
    id: 4,
    title: "Client Meeting",
    date: "2024-03-21",
    time: "2:00 PM",
    description: "New project kickoff",
    attendees: ["client@bigcorp.com"],
    location: "Virtual",
  },
  {
    id: 5,
    title: "Team Building",
    date: "2024-03-22",
    time: "3:00 PM",
    description: "Virtual game session",
    attendees: ["team@gloogle.com"],
    location: "Virtual",
  },
  {
    id: 6,
    title: "Code Review",
    date: "2024-03-22",
    time: "10:00 AM",
    description: "Sprint 23 code review",
    attendees: ["dev@gloogle.com"],
    location: "Meeting Room C",
  },
  {
    id: 7,
    title: "Design Workshop",
    date: "2024-03-23",
    time: "1:00 PM",
    description: "UI/UX workshop",
    attendees: ["design@gloogle.com"],
    location: "Design Lab",
  },
  {
    id: 8,
    title: "Marketing Sync",
    date: "2024-03-23",
    time: "3:30 PM",
    description: "Campaign planning",
    attendees: ["marketing@gloogle.com"],
    location: "Room 201",
  },
  {
    id: 9,
    title: "Budget Review",
    date: "2024-03-24",
    time: "11:30 AM",
    description: "Q2 budget planning",
    attendees: ["finance@gloogle.com"],
    location: "Finance Office",
  },
  {
    id: 10,
    title: "1:1 with Manager",
    date: "2024-03-24",
    time: "2:00 PM",
    description: "Weekly catch-up",
    attendees: ["manager@gloogle.com"],
    location: "Manager's Office",
  },
  {
    id: 11,
    title: "Project Demo",
    date: "2024-03-25",
    time: "10:00 AM",
    description: "New feature demonstration",
    attendees: ["stakeholders@gloogle.com"],
    location: "Main Hall",
  },
  {
    id: 12,
    title: "Training Session",
    date: "2024-03-25",
    time: "2:00 PM",
    description: "New tool training",
    attendees: ["team@gloogle.com"],
    location: "Training Room",
  },
  {
    id: 13,
    title: "Client Call",
    date: "2024-03-26",
    time: "9:00 AM",
    description: "Project status update",
    attendees: ["client@corp.com"],
    location: "Virtual",
  },
  {
    id: 14,
    title: "Team Lunch",
    date: "2024-03-26",
    time: "12:00 PM",
    description: "Monthly team lunch",
    attendees: ["team@gloogle.com"],
    location: "Cafeteria",
  },
  {
    id: 15,
    title: "Security Review",
    date: "2024-03-26",
    time: "3:00 PM",
    description: "Monthly security check",
    attendees: ["security@gloogle.com"],
    location: "Security Office",
  },
  {
    id: 16,
    title: "All Hands",
    date: "2024-03-27",
    time: "11:00 AM",
    description: "Company all hands meeting",
    attendees: ["all@gloogle.com"],
    location: "Main Auditorium",
  },
  {
    id: 17,
    title: "Innovation Workshop",
    date: "2024-03-27",
    time: "2:00 PM",
    description: "Brainstorming session",
    attendees: ["innovation@gloogle.com"],
    location: "Innovation Lab",
  },
];
