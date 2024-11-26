import { Component, createSignal, createEffect, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { authService } from "../services/auth";
import type { CalendarEvent } from "../types/events";
import { generateEvents } from "../utils/eventGenerator";

const CalendarApp: Component = () => {
  const navigate = useNavigate();
  const [user, setUser] = createSignal<any>(null);
  const [events, setEvents] = createSignal<CalendarEvent[]>([]);

  createEffect(async () => {
    const currentUser = await authService.getUser();
    setUser(currentUser);

    // Generate events for today
    const today = new Date();
    setEvents(generateEvents(today));
  });

  const handleLogout = async () => {
    await authService.logout();
    navigate("/login", { replace: true });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div class="calendar-container">
      <header class="calendar-header">
        <div class="header-left">
          <h1>📅 Gloogle Calendar</h1>
        </div>
        <div class="header-right">
          <span class="user-email">{user()?.profile?.email}</span>
          <button onClick={handleLogout}>Logout 👋</button>
        </div>
      </header>

      <div class="agenda-view">
        <h2 class="date-header">{formatDate(new Date())}</h2>
        <div class="time-slots">
          <For each={events()}>
            {(event) => (
              <div class="event-card">
                <div class="event-time">{event.time}</div>
                <div class="event-content">
                  <div class="event-title">{event.title}</div>
                  <div class="event-location">{event.location}</div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
