# Imversion-Technologies-Assessment
# Imversion E-commerce Project

This is a full-stack e-commerce web application developed as part of a coding challenge for Imversion Technologies. The application includes a responsive frontend built with Next.js and a backend powered by Node.js and Express, utilizing a MySQL database for data storage. The project also features Redux for state management and Tailwind CSS for styling.

### Frontend Implementation

The frontend of this application is developed using Next.js, a popular React framework that provides server-side rendering and static site generation out of the box. It ensures that the application is both fast and SEO-friendly.

- **Responsive Grid Layout**: The main page features a responsive grid layout that displays product cards. Each card shows the product's image, title, description, and brand name. This layout adjusts seamlessly to different screen sizes to provide an optimal viewing experience on all devices.
- **Filtering Options**: Users can filter products based on price, brand, and category. The filtering options are managed using Redux for state management, which ensures that the application's state is predictable and easy to debug.
- **Shopping Cart**: Users can add products to a shopping cart. The cart's state is also managed using Redux, allowing the application to maintain a consistent state across different components. The navigation bar includes a cart icon that displays the number of items in the cart, providing a visual indicator to the user.

### Backend Implementation

The backend of the application is developed using Node.js with Express.js as the web framework. This setup allows for a scalable and maintainable backend that can handle various API requests efficiently.

- **GraphQL**: Although optional, GraphQL is preferred for querying and manipulating data. It provides a flexible and efficient way to handle data fetching, reducing the number of API requests needed.
- **REST API**: A RESTful API is also implemented to support CRUD operations for product data. This API allows the frontend to interact with the backend seamlessly.
- **MySQL Database**: The product data is stored in a MySQL database. MySQL is chosen for its reliability and performance. The database schema includes fields for product title, description, image URL, price, brand, and category.

## Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS, Redux
- **Backend**: Node.js, Express.js, GraphQL
- **Database**: MySQL
