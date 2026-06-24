# API bancaria mínima — FastAPI + PostgreSQL

Simple API REST para crear cuentas, consultar saldo y realizar transferencias.
Demo reproducible para mostrar diseño de backend, transacciones y persistencia.

## Stack
Python 3.10; FastAPI; SQLAlchemy; PostgreSQL; Docker; pytest

## How to run (3 steps)
1. git clone <repo> && cd bank_app
2. ./run-demo.sh
3. Open http://localhost:8000/docs to test endpoints

## Quick curl examples
Create account:
curl -X POST http://localhost:8000/accounts -H "Content-Type: application/json" -d '{"name":"Juan","balance":1000}'

Get balance:
curl http://localhost:8000/accounts/1

Transfer:
curl -X POST http://localhost:8000/transfer -H "Content-Type: application/json" -d '{"from_id":1,"to_id":2,"amount":100}'

Tech Stack
Next.js
TypeScript
Appwrite
Plaid
Dwolla
React Hook Form
Zod
TailwindCSS
Chart.js
ShadCN

 Features
 Authentication: An ultra-secure SSR authentication with proper validations and authorization

 Connect Banks: Integrates with Plaid for multiple bank account linking

 Home Page: Shows general overview of user account with total balance from all connected banks, recent transactions, money spent on different categories, etc

My Banks: Check the complete list of all connected banks with respective balances, account details

 Transaction History: Includes pagination and filtering options for viewing transaction history of different banks

 Real-time Updates: Reflects changes across all relevant pages upon connecting new bank accounts.

 Funds Transfer: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.

 Responsiveness: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

and many more, including code architecture and reusability.

Snippets

exchangePublicToken
user.actions.ts
dwolla.actions.ts
bank.actions.ts
BankTabItem.tsx
BankInfo.tsx
Copy.tsx
PaymentTransferForm.tsx
 BankDropdown.tsx
Pagination.tsx
Category.tsx



