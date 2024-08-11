## Milk In Minutes

### Overview
**Milk In Minutes** is a single-page application (SPA) developed using Angular, designed to revolutionize how customers access and order dairy products online. By focusing on simplicity, efficiency, and personalization, this project offers a seamless interface for users to browse, filter, and place orders for their favorite dairy products. The application also includes a secure admin view for managing and viewing product orders, making it a valuable tool for dairy businesses looking to expand their online presence.

### Key Features
- **Product Display:** Attractive images and detailed descriptions of dairy products.
- **Search and Filter:** Users can search for products by name and category.
- **Order Placement:** Users can view product details and submit orders using a form.
- **Admin Access:** A secure login system allows the site administrator to view all product orders.
- **Data Persistence:** Orders and product data are stored using JSON servers, ensuring data is retained.

### Technology Stack
- **Angular v17.3.0:** Framework for building SPAs.
- **TypeScript v5.4.2:** Enhances JavaScript with static typing.
- **Angular Material v17.3.4:** Provides UI components.
- **JSON Server:** Used for data persistence on different ports.

### Key Modules
- **NgModule:** Defines Angular modules.
- **BrowserModule:** Provides services for browser-based applications.
- **AppRoutingModule:** Manages navigation and routes.
- **FormsModule:** Simplifies form creation.
- **ReactiveFormsModule:** Offers advanced form control and validation.
- **HttpClientModule:** Enables communication with backend servers.

### Project Structure
- **Landing View:** Displays dairy products, allows searching and filtering, and navigates to the order view.
- **Order View:** Displays selected product details, captures order information, and validates input.
- **Login View:** Secured access for administrators to view and manage orders.
- **Dairy Products Requests View:** Admin view showing all received orders.

### Local Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd milk-in-minutes
   ```

2. **Install Dependencies:**
   Ensure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
   ```

3. **Run JSON Servers:**
   The application uses two JSON servers for data persistence:
   
   - **Dairy Products Data:** Runs on port 3000. Start this server with:
     ```bash
     npx json-server --watch products.json --port 3000
     ```
   
   - **Order Data:** Runs on port 3001. Start this server with:
     ```bash
     npx json-server --watch orders.json --port 3001
     ```
   
   Ensure `products.json` and `orders.json` are in the root directory of the project.

4. **Start the Angular Development Server:**
   Start the Angular application using the following command:
   ```bash
   ng serve
   ```
   The application will typically be accessible at `http://localhost:4200/`.

5. **Access the Application:**
   Open your web browser and navigate to `http://localhost:4200/` to view and interact with the Milk In Minutes application.

### Future Enhancements
- **Shopping Cart:** Add functionality to allow multiple items in an order.
- **User Authentication:** Implement user roles and permissions.
- **Payment Integration:** Enable online payments for orders.
- **Mobile Optimization:** Develop a mobile-friendly version of the application.
- **Real-Time Updates:** Provide real-time order updates and notifications.

### Conclusion
Milk In Minutes showcases the use of Angular and TypeScript in building a responsive and user-friendly SPA for online dairy ordering. The application provides a secure and efficient platform for dairy businesses to enhance their online presence.

---
