# DESIGN_DOC.md: Donation Flow

## 1. Project Overview

This document outlines the design for Donation Flow, a charity money tracking application. The app allows users to track their charitable contributions and view overall distribution data, while admins can manage all aspects of the system.

### 1.1 Purpose

To provide a platform for tracking individual and collective charitable contributions, as well as the distribution of funds to recipients.

### 1.2 Key Features

- User authentication via phone number
- Individual contribution tracking
- Monthly distribution viewing (for users)
- Personal report generation
- Comprehensive admin controls and reporting
- Monthly contribution status and reminders

## 2. Authentication System

### 2.1 User Registration and Login

- Users sign up or log in using their phone number
- Phone number verification via SMS code
- After verification, users set a password for future logins

### 2.2 Security

- Implement secure password hashing
- Use HTTPS for all communications
- Implement rate limiting for login attempts

## 3. User Roles and Permissions

### 3.1 Regular Users

- Can view their own contributions
- Can view total monthly distributions (without recipient details)
- Can generate personal monthly reports
- Cannot edit any data
- Can see their total contributions and monthly contribution status

### 3.2 Admins

- Full view and edit access to all data
- Can create comprehensive reports
- Can manage user accounts
- Can send contribution reminders

## 4. Data Models

### 4.1 User

- ID
- Phone Number
- Password (hashed)
- Role (User/Admin)
- Total Contributions
- Last Contribution Date
- Last Reminder Date

### 4.2 Contribution

- ID
- User ID (foreign key)
- Amount
- Date

### 4.3 Distribution

- ID
- Recipient ID (foreign key)
- Amount
- Date

### 4.4 Recipient

- ID
- Name (visible only to admin)

## 5. Features

### 5.1 User Dashboard

- Display user's total contributions
- Show monthly contribution history
- Display overall monthly distribution totals
- Indicate if user has contributed this month
- Show last reminder date (if applicable)

### 5.2 User Reporting

- Generate monthly personal contribution reports
- Compare current month to previous months
- Calculate user's percentage of total contributions

### 5.3 Admin Dashboard

- Overview of all contributions and distributions
- User management interface
- Data editing capabilities
- Reminder system management

### 5.4 Admin Reporting

- Generate comprehensive reports:
  - Individual user contributions over time
  - Individual recipient distributions over time
  - Monthly totals for contributions and distributions
  - Year-over-year comparisons

### 5.5 Contribution Reminders

- Automated system to track who has not contributed in the current month
- Admin interface to send reminders to users who haven't contributed
- Tracking of reminder sent dates to avoid over-communication

## 6. Technical Stack (MERN)

### 6.1 Frontend

- React.js for the user interface
- Tailwind CSS for styling

### 6.2 Backend

- Node.js with Express.js

### 6.3 Database

- MongoDB for data storage

### 6.4 Authentication

- JWT for session management
- Twilio API for phone verification

## 7. Security Considerations

- Implement input validation and sanitization
- Use parameterized queries to prevent NoSQL injection
- Implement proper access controls for all API endpoints
- Regular security audits and updates

## 8. Scalability

- Design the database schema for efficient querying as data grows
- Implement caching strategies for frequently accessed data
- Consider future implementation of load balancing for high traffic

## 9. Future Enhancements

- Mobile app version
- Integration with popular payment gateways for direct contributions
- Advanced analytics and data visualization tools
- Multi-language support

## 10. Testing Strategy

- Unit tests for all core functions
- Integration tests for API endpoints
- User acceptance testing for key features
- Performance testing for report generation and data retrieval

This design document provides a high-level overview of Donation Flow. It covers the main features, data structure, and technical considerations. As development progresses, this document should be updated to reflect any changes or additional details.
