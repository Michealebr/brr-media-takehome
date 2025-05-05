# brr-media-takehome
This is a React-based ticketing and task management interface built as part of a technical assignment. It includes role-based views, ticket submission, to-do lists, and conditional UI rendering based on user roles.

## 🔧 Setup Instructions
- git clone https://github.com/Michealebr/brr-media-takehome.git
- cd brr-media-takehome
- Install Dependencies - npm install 
- Run the Application - npm run dev
- Run Tests - npm run test
- Run Tests with Coverage - npm run test:coverage

## 🔧 Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Context (for global state)
- Vitest & React Testing Library (for testing)

## 🧑‍💻 Features
- Role-based switching (Admin, Staff, User)
- Ticket submission with validation
- File upload (with file type restrictions)
- To-Do List filtered by user
- Admin view for all tickets
- LocalStorage role/email persistence
- Toast notifications
- Unit Test
- Fully Responsive 

## Assumptions Made
- I assumed that user roles (admin, staff, user) are determined solely by a selected value and associated email, with no authentication system in place.
- On the homepage, everyone can view a general overview of recent and pending tasks.
- Admins can:
  View all tickets submitted by any user.
  Access extra staff-related data that is hidden from staff and users.
- Staff and users can:
  Only view their own tickets, determined by their email.
  View the same task overview on the homepage as admin but without deeper visibility into others' submissions or staff-specific fields.
- File validation is handled on the frontend, and I assumed that only .png, .jpeg, and .pdf file types are allowed.

##  Improvements I’d Make With More Time (Within Scope of This Task)
- Implement Additional Unit Tests: Expand test coverage across the full application to ensure more robust and reliable components.
- Redesign Key Pages: Refine the UI/UX of the homepage and ticket submission page for better usability and visual consistency.
- Advanced Filtering:
  Add team and status filters on the staff page for easier navigation.
  Add severity filters and an urgency dropdown to the tickets page for clearer prioritisation.
- Dark Mode Support: Introduce a dark mode toggle for improved accessibility and user preference.
