# **Frontend Engineer Coding Challenge**

## **Overview**

In this challenge, you'll transform a given set of student data into a new data model and present it in a user interface that follows the provided UI design. The goal is to test your ability to work with TypeScript, data transformation, and frontend UI development.

## **Recommended IDE Setup**

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## **Project Setup**

This project is built using **Svelte 5** with **Vite**. Svelte shares conceptual similarities with React but differs in its syntax and approach.

In **`/src`** there is **`App.svelte`** which is the top level component that renders on the page.

The **`/src/lib`** directory is used to store reusable components, utilities, or helper functions that can be shared across the application.

## **Running Instructions**

To run this app, ensure you have **[Node.js](https://nodejs.org/)** installed on your system. Then, follow these steps:

1. Navigate to the project directory:

   ```bash
   cd /Users/.../ekorn-coding-test
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the [http://localhost:5173](http://localhost:5173).

You're now ready to start working on the app!

# The Task

The task is to transform an array of objects into a new array of objects with a different set of properties.

Then display that transformed data in the UI, which should match the following design: [Task UI Prototype](https://www.figma.com/design/6LKnU9wBsnheRrfN7EdGnu/Untitled?node-id=1-2&m=dev&t=sIh3V0o9K1dPdBDH-1)

If you prefer, you may change the app to use any frontend framework of your choice. However you may not use any utilty packages of any kind.

## **Part 1: Data Transformation**

In **`/lib/data.ts`** there is an exported array of objects called **`studentsData`**. This array must remain unchanged.

In **`/App.svelte`** there is an array const called **`students`** with some example objects inside of it.

Remove the example objects leaving the **`students`** array empty.

Remove the `<Hello>` and `<DataPreview>` elements (they're there to give examples of Svelte components).

Copy all of the objects from the **`studentsData`** array into **`students`** array.

The type of the **`students`** array must not be changed.

## **Part 2: UI Implementation**

Create a simple card layout to display the transformed student data.

On wider screens the cards should lay out up to a maximum of three columns, with the grid having a max-width of 1024px.

On mobile the cards should display in a single column.

Style the grid heading, the cards, and data to match the provided design as closely as possible.

### **Styling Rules**

- Use only plain CSS.

## **Bonus Features (Optional)**

- Add sorting functionality (e.g., click a button to sort the cards by name).
- Add a simple filter (e.g., a switch to show only "Active" students).

## **Submission Instructions**

- Push your solution to a **public GitHub repository**.
- Include a **NOTES.md** explaining:
  - Your thought process
  - Any assumptions made
  - Any additional features implemented
