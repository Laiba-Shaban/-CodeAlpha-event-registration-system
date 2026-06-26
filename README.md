# -CodeAlpha-event-registration-system
A Node.js and PostgreSQL backend project to handle event registrations.

## Features

* **Registration API:** Allows users to register by providing their name, email, and event name.
* **Database Integration:** Securely saves registration data into a PostgreSQL database.
* **Error Handling:** Provides clear feedback if the registration fails or if required fields are missing.
* **Environment Configuration:** Uses `.env` files to manage sensitive database credentials safely.

## Tech Stack

* Node.js
* Express
* PostgreSQL

## How to Run

1. Clone the repo.
2. Run `npm install` to install packages.
3. Create a `.env` file with your database details (`DB_USER`, `DB_HOST`, `DB_NAME`, `DB_PASSWORD`).
4. Start the server: `node -r dotenv/config app.js`

## API Endpoint

* `POST /register` - Register a new user.
