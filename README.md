# Pokemon Explorer App

---

## Setup Instructions :

### 1. Clone the Repository

```bash
git clone https://github.com/Ayan-thecodeking/CW-Codewalnut-Assignment.git
```

### 2. Install Dependencies

We are using `pnpm` for package management. If you haven't installed `pnpm` yet, you can install it globally by running:

```bash
npm install -g pnpm
```

Once you have `pnpm` installed, run:

```bash
pnpm install
```

### 3. Available Styling Options

The project is set up with **Tailwind CSS** as the default styling solution. However, you can opt to use any of the following:

- **Tailwind (default)**: Already configured in `src/app/globals.css`.
- **CSS**: You can create and use custom CSS styles by modifying or adding to `src/app/globals.css`.
- **Sass**: A basic Sass configuration is already in place. Add your styles to `src/styles/globals.scss`.

You are free to use any styling approach you prefer, these are just the options set up for you already in this project.

### 4. Running the App

To start the development server, run:

```bash
pnpm dev
```

This will launch the app in development mode at [http://localhost:3000](http://localhost:3000).

## Pokemon App - Approach

I started learning Next.js just last week, and I found this project to be the perfect opportunity to put my newly acquired skills to the test. In this app, I’ve kept things simple and focused on practical implementation.

### Key Decisions:

- **API Data Fetching**: Instead of using Context API to manage the state for the Pokemon data, I decided to use a custom hook. This approach keeps the logic isolated and makes the code more modular and easier to manage.
  
- **API Calls**: For this project, I thought the native `fetch` method would be a good choice for making API calls, as it keeps the project lightweight and doesn't require additional dependencies, and I found no significant advantage to using Axios in this case.

- **Routing**: I utilized the App Router for client-side routing. This allowed me to create dynamic routes to show individual Pokemon details, making the app more interactive.

- **Folder Structure**: I followed a simple and intuitive folder structure that makes the codebase easy to read and maintain. This was done with scalability in mind, allowing for straightforward future updates and additions.

This project has helped me get hands-on with Next.js and taught me how to organize and structure an app effectively. I’m excited to continue building on this foundation and improving my skills!


## Challanges 

As I was new to Next.js and hadn’t worked with React in a while, I faced some initial challenges. One issue was retrieving query parameters, which took me a bit of time to figure out. After referring to the documentation, I identified the problem and understood how to properly handle it. Additionally, using the App Router and setting up dynamic routing was a bit tricky since I was creating a new page with a different name. However, through this, I learned a lot of new concepts that I plan to incorporate in future projects.

Apart from these, I didn’t encounter any major hurdles while implementing the core functionality. The only challenge I faced was fetching data from the Poke API, where the initial API call returned an array of objects. I had to make additional requests to get detailed data for each object, which was a bit time-consuming.


