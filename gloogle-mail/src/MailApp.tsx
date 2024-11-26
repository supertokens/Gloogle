import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import "./MailApp.css";
import emailData from "./data/emails.json";

interface Email {
  id: number;
  subject: string;
  from: string;
  preview: string;
  read: boolean;
  date: string;
}

export function MailApp() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    setEmails(emailData.emails);
  }, []);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth");
    }
  }, [auth, navigate]);

  return (
    <div className="mail-app">
      <header className="mail-header">
        <div className="header-left">
          <h1>Glmail 📧</h1>
          <input
            type="text"
            placeholder="Search mail"
            className="search-input"
          />
        </div>
        <div className="header-right">
          <span className="user-email">{auth.user?.profile.email}</span>
          <button
            onClick={() => void auth.removeUser()}
            className="logout-button"
          >
            Logout 👋
          </button>
        </div>
      </header>

      <div className="mail-content">
        <nav className="sidebar">
          <button className="compose-button">Compose ✏️</button>
          <ul className="nav-list">
            <li className="nav-item active">Inbox 📥</li>
            <li className="nav-item">Sent 📤</li>
            <li className="nav-item">Drafts 📝</li>
            <li className="nav-item">Trash 🗑️</li>
          </ul>
        </nav>

        <main className="email-list">
          {emails.map((email) => (
            <div
              key={email.id}
              className={`email-item ${!email.read ? "unread" : ""}`}
            >
              <div className="email-header">
                <span className="email-from">
                  {email.read ? "📭" : "📬"} {email.from}
                </span>
                <span className="email-date">🗓️ {email.date}</span>
              </div>
              <h3 className="email-subject">{email.subject}</h3>
              <p className="email-preview">{email.preview}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
