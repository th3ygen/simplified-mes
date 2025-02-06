# Simplified MES System - Pre-Task Submission

This repository contains the code for a simplified Manufacturing Execution System (MES) module, developed as a pre-task submission.  The system includes a dashboard, production tracking, and quality control functionalities.

## Project Overview

This project simulates a simplified MES system, providing a basic framework for monitoring and managing manufacturing processes.  The system is built using Vue.js for the frontend, Express.js for the backend, Prisma with PostgreSQL for the database, and GraphQL for API access. Tailwind CSS is used for styling.

## Features

*   **Dashboard:** Provides an overview of key manufacturing metrics (production status, machine utilization, defect rates, etc.).
*   **Production Tracking:** Enables tracking of production runs, including progress, machine utilization, and downtime.  Includes a basic Gantt chart for production scheduling.
*   **Quality Control:**  Allows for the recording of quality control checks and flagging of defects.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

*   Node.js and npm installed on your machine.
*   PostgreSQL database installed and running.  Update the `DATABASE_URL` environment variable in the `.env` file in the backend directory to point to your PostgreSQL database.
*   Prisma CLI installed globally: `npm install -g prisma`

### Backend Setup

1.  Navigate to the backend directory:

    ```bash
    cd backend
    ```

2.  Install backend dependencies:

    ```bash
    npm i
    ```

3.  Run Prisma migrations:

    ```bash
    npx prisma migrate dev 
    ```

4.  Seed the database:

    ```bash
    npx prisma db seed
    ```

5.  Run the backend development server:

    ```bash
    npm run dev
    ```

    The backend server should start running on [mention the port, e.g., http://localhost:3001].

### GraphQL Server

The GraphQL API is hosted on port 4000.

1.  In a separate terminal, navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Start the graphql server
    ```bash
    npm run dev
    ```
    You can access the GraphiQL interface at http://localhost:4000/graphql.

### Frontend Setup

1.  Open a new terminal and navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2.  Install frontend dependencies:

    ```bash
    npm i
    ```

3.  Run the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend application should open in your browser (dynamic port, refer vite output).

## Technical Notes

*   This project uses Prisma as an ORM for database interactions, simplifying data access and management.
*   GraphQL is used to provide a flexible and efficient API for the frontend to consume.
*   Tailwind CSS is used for rapid UI development.
*   **Frontend-Backend Integration:**  Frontend and backend are not fully integrated at this stage.  Therefore, CRUD operations are not yet functional.
*   **Real-time Data Updates:** Real-time data updates between the frontend and backend are not yet implemented. I would use WebSockets or Server-Sent Events for this functionality.
*   **Gantt Chart Performance:** The Gantt chart implementation using ApexCharts is currently experiencing performance issues, causing UI lag. Further optimization is required for a smoother user experience.
