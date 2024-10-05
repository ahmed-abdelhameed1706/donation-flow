# Donation Flow

Donation Flow is a web-based application designed to streamline the process of tracking charitable contributions and fund distributions. It provides an intuitive platform for users to monitor their donations and for administrators to manage overall charity flows.

## Features

- **User Authentication**: Secure phone number-based registration and login system.
- **Contribution Tracking**: Users can view their donation history and current month's status.
- **Distribution Insights**: Transparent view of overall monthly fund distributions.
- **Personalized Reporting**: Generate detailed reports on individual contribution patterns.
- **Admin Dashboard**: Comprehensive management of users, contributions, and distributions.
- **Reminder System**: Automated notifications for pending monthly contributions.

## Tech Stack

Donation Flow is built using the MERN stack:

- **MongoDB**: Database
- **Express.js**: Backend framework
- **React**: Frontend library
- **Node.js**: Runtime environment

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- MongoDB (v4.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/ahmed-abdelhameed1706/donation-flow.git
   cd donation-flow
   ```

2. Install dependencies:

   ```
   npm install
   cd client && npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   ```

4. Run the development server:
   ```
   npm run dev
   ```

The application should now be running on `http://localhost:5173`.

## Contributing

As this is a solo project, contributions are not currently being accepted. However, feedback and suggestions are always welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all the open-source libraries and tools that made this project possible.
- Special appreciation to my good friends for inspiring this application.

## Contact

Ahmed Abd El Hameed - ahmed.abdelhameed1706@gmail.com

Project Link: [https://donationflow.ahmed.software](https://donationflow.ahmed.software)
