LIVE  https://zajachubert.github.io/Training-diary2-front
If you want, you can use a ready-made test account (login: test123@com password: Test123)

Installation
$ npm install

Running the app
$ npm run start
Watch mode
$ npm run start:dev

Frontend for this backend application in repository "Training-diary2-front".

Features of this project
This example is basically a rest API for training diary application. 
It provides a possibility to perform sign up users, manage user's trainings.
The application includes error handling taking into account correct response codes.
This API showcase consists of the following parts:
# Auth module:
- responsible for creating, decoding, destroying JWT tokens for users
- storing user passwords in an encrypted way
- responsible for verifying permissions for logged in users
# Training module:
 - responsible for CRUD operations on users tasks records
 - operations using TypeORM for mysql database
 - validation of transmitted data
 - serialization of transmitted data











