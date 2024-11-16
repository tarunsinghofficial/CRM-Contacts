
### contact-management

```
contact-management/
├── frontend/          # React frontend application
├── backend/           # Node.js backend application
├── .gitignore         # Git ignore file
└── package.json       # Root package.json for monorepo
```

---

### Local Development Setup

#### Clone the repository:

```bash
git clone https://github.com/tarunsinghofficial/CRM-Contacts
cd CRM-Contacts
```

#### Install dependencies:

```bash
npm run install-all
```

#### Set up environment variables:

**Backend (`.env` in `backend` folder):**
```env
PORT=5000
MONGODB_URI=add_your_mongodb_uri
```

**Frontend (`.env` in `frontend` folder):**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

#### Start development servers:

**Frontend**
```bash
npm run dev
```

**Backend**
```bash
npm start
```
