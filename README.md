🎵 Full Stack Music Application

A modern web application that allows users to search, listen to, and manage their favorite songs by genre, artist, and album. This app provides an intuitive and responsive user experience with robust features such as personalized playlists, authentication, and administrative controls.

## 🚀 Features

- **Search & Listen**: Search for songs by genre, artist, or album and listen to them directly.
- **User Authentication**: Secure login system enabling CRUD operations on playlists.
- **Playlist Management**: Create, view, edit, and delete playlists with optional descriptions and visibility settings.
- **Public Playlists**: Browse up to 10 public playlists with details like creator, track count, playtime, and ratings.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Admin Controls**: Manage user accounts, reviews, and ensure smooth site maintenance.
- **DMCA Compliance**: Include mechanisms for handling DMCA notices and policy adherence.

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: Firebase
- **Deployment**: AWS
- **API**: REST API
## 🔑 Authentication

- **Local Authentication**: Email and password-based login with error handling for invalid credentials.
- **Third-Party Authentication**: Login via external providers (e.g., Google).
- **Email Verification**: Users must verify their email before accessing certain features.
- **Deactivated Accounts**: Admins can deactivate accounts to restrict access.

## 🎨 UI/UX Highlights

- **Home Page**: Features the app name, a brief description, and a login button.
- **Search Interface**: Intuitive search bar with results displayed in a user-friendly layout.
- **Playlist Management**: Expandable playlist details with options to play tracks on YouTube.
- **Admin Dashboard**: Tools for user management, review moderation, and playlist visibility controls.

## 🔗 Deployment

The application is deployed on AWS. However, not live on AWS at the moment.
Find the source code on GitHub: [GitHub Repository](https://github.com/aarishlakhani/se3316-rbalagan-alakha33-taran-lab4).

## 📋 Test Plan

### Authentication Tests
- Validate login, signup, and password recovery flows.
- Ensure secure handling of incorrect credentials and deactivated accounts.

### Search Functionality
- Verify accurate search results based on keywords.
- Ensure case-insensitive and whitespace-tolerant search queries.

### Playlist Features
- Test playlist creation, editing, deletion, and public visibility settings.
- Validate that unauthorized users cannot access or modify private playlists.

### Admin Controls
- Ensure admin-exclusive features like account deactivation and review moderation function correctly.

### Race Conditions
- Confirm graceful handling of changes to playlists or reviews during concurrent operations.

## 🖥️ Running Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/aarishlakhani/Full-Stack-Music-Application
    cd Full-Stack-Music-Application
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory with the following:
    ```
    REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
    REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
    REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## 🤝 Contributors

- Aarish Akbar Lakhani
- Resche Balganesh
- Thilakshanan Aran
