# GitHub-Profile-Analyzer

A Node.js backend application that analyzes GitHub user profiles using the GitHub Public API and stores profile insights in a MySQL database.

## Features

- Fetch GitHub profile data using username
- Calculate profile score based on profile statistics
- Store analyzed profiles in MySQL
- Retrieve all analyzed profiles
- Retrieve a specific analyzed profile by username
- RESTful API architecture
- Layered structure (Routes → Controllers → Services → Models)

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub Public API
- Axios

---

## Project Structure

backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ └── githubController.js
│
├── models/
│ └── githubModel.js
│
├── routes/
│ └── githubRoutes.js
│
├── services/
│ └── githubService.js
│
├── .env
├── server.js
└── package.json

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
```

### Start Server

```bash
node server.js
```

Server will run on:

```text
http://localhost:8080
```

---

## Database Schema

```sql
CREATE TABLE 
```

---

## API Endpoints

### Analyze GitHub Profile

**POST**

```http
/api/github/analyze

---

### Get All Profiles

**GET**

```http
/api/github
```
```

---

### Get Profile By Username

**GET**

```http
/api/github/:username
```

Example:

```http
/api/github/username
```
```

---

## Profile Score Formula

```text
score = followers + (public_repos × 2)
```

Example:

```text
followers = 10
public_repos = 5

score = 10 + (5 × 2)
score = 20
```

---

## Postman Collection

Included Collection:

```text
GPA API's
```

Contains:

- Analyze Profile API
- Get All Profiles API
- Get Profile By Username API

---

## Author

Pravin Kadam