# 🏝️ The Wild Oasis — Hotel Management Dashboard

---

### About

**The Wild Oasis** is a modern web app built for hotel staff to manage bookings, cabins, and serving guests, while also tracking revenue and occupancy analytics.

## 🚀 Live Demo

- **Live Demo:** [https://the-wild-oasis-gold-eight.vercel.app ↗️](https://the-wild-oasis-gold-eight.vercel.app)

## ✨ Features

- 🔐 **Authentication & Profile Management:** Secure login for hotel staff, profile updates (avatar, name, password).
- 📊 **Dashboard & Analytics:** Interactive charts for sales, stay durations, and check-ins over the last 7, 30, or 90 days.
- 📅 **Booking Management:**
  - Filter and sort features.
  - Check-in and check-out workflows.
  - Payment status updates and breakfast options.
- 🌙 **Dark Mode:** Full dark mode support.

## 🛠️ Tech Stack

- **Frontend:** React, React Router
- **State Management & Data Fetching:** React Query (TanStack Query)
- **Form Handling:** React Hook Form
- **Styling:** Styled Components, CSS Variables
- **Backend & Authorization:** Supabase (PostgreSQL, Auth, Storage buckets)
- **Charts & UI Feedback:** Recharts, React Icons, React Hot Toast

### Installation & Local Development

```bash
# Clone the repository
git clone [https://github.com/pafke2/the-wild-oasis.git](https://github.com/pafke2/the-wild-oasis.git)

# Install dependencies
npm install

# Set up environment variables, create a .env.local file in the root directory of the project and add your Supabase credentials:
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-anon-key

# Start the local development server
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) with your browser to see the application (or the port shown in your terminal).

---

## 📄 License

This project is licensed under the MIT License — feel free to modify and use it for learning or personal projects!
