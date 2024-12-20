export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  attendees: string[];
  location?: string;
}
