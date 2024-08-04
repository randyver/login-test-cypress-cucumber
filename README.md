# Testing Using Cypress-Cucumber

This repository consists of two folders: `app` and `cypress-cucumber`, where `app` is a simple website to be tested using automation with Cypress and Cucumber.

## Technologies Used

### App
- NextJS
- NextAuth
- TypeScript
- TailwindCSS
- Shadcn/UI
- PostgreSQL
- Supabase
- Drizzle

### Testing
- Cypress
- Cucumber

## How to Test

Since this repository focuses on simple automation testing with Cypress-Cucumber, here are the steps to test the deployed website: [https://login-test-cypress-cucumber.vercel.app/](https://login-test-cypress-cucumber.vercel.app/)

1. Clone this repository:
```bash
git clone https://github.com/randyver/login-test-cypress-cucumber.git
```
2. Navigate to the testing repository:
```bash
cd cypress-cucumber
```
3. Install dependencies:
```bash
npm install
```
4. To run tests headlessly in the terminal:
```bash
npm test
```
5. To open Cypress and run tests interactively:
```bash
npm run cy:open
```
6. Happy testing!