# NikahMatch - Matrimony Frontend

A modern matrimony/marriage matchmaking web application frontend built with React (Vite), TailwindCSS, and React Router.

## Tech Stack

- **React 18** (Vite)
- **TailwindCSS**
- **React Router** v6
- **Axios** for API calls
- **Context API** for auth state management
- **React Icons** + **React Toastify**

## Features

- User registration and login
- Browse profiles with filters (age, religion, location, education)
- Search functionality
- Profile detail view
- Edit profile with photo upload
- Interest system (send/accept/reject)
- Messaging system with real-time polling
- Responsive mobile-first design
- Online status indicators

## Pages

- **Home** - Hero section, features, success stories, CTA
- **Login** - Email/password authentication
- **Register** - Multi-field registration form
- **Browse Profiles** - Grid layout with filters and pagination
- **Profile Details** - Full profile view
- **My Profile** - View own profile
- **Edit Profile** - Update profile info and preferences
- **Interests** - Sent/received interests with accept/reject
- **Messages** - Conversation list with chat interface

## Setup

### Prerequisites
- Node.js 18+
- Backend API running (see hero-apps-server)

### Installation

```bash
npm install
```

### Environment Variables

Create `.env` in the root:

```
VITE_API_URL=http://localhost:5000/api
VITE_SERVER_URL=http://localhost:5000
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Folder Structure

```
src/
  pages/
    Home.jsx
    Login.jsx
    Register.jsx
    Profile.jsx
    EditProfile.jsx
    BrowseProfiles.jsx
    ProfileDetails.jsx
    Interests.jsx
    Messages.jsx
  components/
    Navbar.jsx
    Footer.jsx
    ProfileCard.jsx
    InterestButton.jsx
    ChatBox.jsx
  context/
    AuthContext.jsx
  services/
    api.js
  App.jsx
  main.jsx
  index.css
```
