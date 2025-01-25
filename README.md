## Genesis test task with Vue3 and Nest.js

To run both frontend and backend servers you should:
  ```bash
   npm i
  ```
then for frontend
  ```bash
   npm run dev
  ```
for backend you should first
  ```bash
   npm run start:dev
  ```
 create .env file with CLIENT_ID ("X-Client-Id") variable
 then make get request http://localhost:3000/api/v1/auth
 and finally copy access key and paste it to .env file (ACCESS_KEY=access key)

 Now you can make requests on frontend
 
