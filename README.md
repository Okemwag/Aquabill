AQUABILL - Prepaid Billing Management Software for Smart Water Meters
==========================================================

Overview
--------

This application is a Prepaid Billing Management Software designed for smart water meters. It provides functionalities for managing billing, meter readings, and user accounts in a user-friendly interface. The application is built with Django for the backend and React for the frontend. Docker is used for containerization, PostgreSQL serves as the primary database, and Celery is employed for handling asynchronous tasks.

Features
--------

-   **Prepaid Billing**: Manage and track prepaid billing for water consumption.
-   **Smart Meter Integration**: Handle smart water meter data and readings.
-   **User Management**: Admin and user roles for managing accounts and permissions.
-   **Asynchronous Tasks**: Background processing using Celery.
-   **Responsive UI**: Modern, responsive frontend using React and Tailwind CSS.

Technologies
------------

-   **Backend**: Django, PostgreSQL
-   **Frontend**: React, React Query, Tailwind CSS
-   **Asynchronous Tasks**: Celery
-   **Containerization**: Docker

Getting Started
---------------

### Prerequisites

-   Docker
-   Docker Compose

### Setup

1.  **Clone the Repository**

    bash

    Copy code

    `git clone https://github.com/yourusername/prepaid-billing-management-software.git
    cd prepaid-billing-management-software`

2.  **Build and Start Containers**

    bash

    Copy code

    `docker-compose up --build`

    This command will build the Docker images and start the containers defined in the `docker-compose.yml` file.

3.  **Apply Migrations**

    Open a new terminal and run the following command to apply database migrations:

    bash

    Copy code

    `docker-compose exec web python manage.py migrate`

4.  **Create a Superuser**

    To access the Django admin interface, create a superuser with:

    bash

    Copy code

    `docker-compose exec web python manage.py createsuperuser`

5.  **Access the Application**

    The application will be available at `http://localhost:8000`. The React frontend can be accessed at `http://localhost:3000` if running separately.

Configuration
-------------

-   **Django**: Configuration settings can be found in the `settings.py` file within the Django application.
-   **Celery**: Celery configuration is located in `celery.py`.
-   **React**: Configuration files for React are located in the `frontend` directory.

Contributing
------------

Contributions are welcome! Please submit issues and pull requests on GitHub.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.