# Session Auth — Frontend

React frontend for a cookie-based session authentication app, paired with an [Express backend](https://github.com/anuragDeol/session-auth-backend).

**Live app:** https://session-auth-frontend.vercel.app 

**Backend github repo:** https://github.com/anuragDeol/session-auth-backend

## Features

- Register and login forms
- Session validated against the backend on page load, not just `localStorage`
- Centralized auth state and API calls via a shared `useAuth` custom hook
- Toast notifications for success/error states

## Tech Stack

- React (Create React App)
- react-toastify
- `fetch` with `credentials: 'include'` for cookie-based sessions

## Running Locally

1. Clone and install:
   ```
   git clone https://github.com/anuragDeol/session-auth-frontend.git
   cd session-auth-frontend
   npm install
   ```

2. Create a `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:7000
   ```

3. Run:
   ```
   npm start
   ```

   App runs at `http://localhost:3000`.

Requires the [backend](https://github.com/anuragDeol/session-auth-backend) running and reachable at `REACT_APP_API_URL`.
