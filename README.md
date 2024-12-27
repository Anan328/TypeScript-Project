# TypeScript Project: Finance Logger

This project is a simple **finance logger** built using TypeScript. Users can add payments or invoices by providing details like the name, description, and amount.

---

## Features

- Add an amount as a **payment** or **invoice**.
- Specify the user details and amount.
- Clean and modular TypeScript code.

## Technologies Used

- TypeScript
- CSS
- HTML
- GitHub for version control

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Anan328/TypeScript-Project.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd TypeScript-Project
   ```

3. **Install TypeScript globally (if not already installed):**

   ```bash
   npm install -g typescript
   ```

4. **Initialize the TypeScript project:**
   If a `tsconfig.json` file is not already present, create one:

   ```bash
   tsc --init
   ```

5. **Update ****`tsconfig.json`****:**
   Make sure the following changes are made in the `tsconfig.json` file:

   ```json
   {
     "include": ["src"],
     "compilerOptions": {
       "outDir": "./public",
       "rootDir": "./src"
     }
   }
   ```

6. **Compile TypeScript files in watch mode:**

   ```bash
   tsc -w
   ```

   This will watch for changes in the `src` folder and output compiled JavaScript files to the `public` folder.

7. **Run the project:**
   Open `index.html` in a browser (preferably using Live Server for auto-reload) and ensure the `style.css` file is loaded for proper styling.

---

## File Structure

- `src/`: Contains TypeScript source files.
- `public/`: Contains compiled JavaScript files and other public assets.
- `index.html`: The main HTML file for the project.
- `style.css`: Adds styling to the project.
- `tsconfig.json`: TypeScript configuration file.

---

## Contribution

Feel free to fork the repository and submit pull requests. All contributions are welcome!

---
