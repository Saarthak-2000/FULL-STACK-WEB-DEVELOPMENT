# blog-web-application
A responsive Blog Web Application built using Node.js, Express.js, EJS, HTML, CSS, and JavaScript. Supports creating, viewing, editing, and deleting blog posts with dynamic rendering, form validation, and in-memory data storage.



Absolutely! For your GitHub repository, you should create a professional **README.md** file. It will explain what your Blog Web Application does, its features, technologies, project structure, installation steps, PowerShell commands, and how someone can run it on their computer.

I've prepared a GitHub-ready README based on the `server.js`, `index.ejs`, `edit.ejs`, and `style.css` code you've shared.

## **1. GitHub project description**

# Blog Web Application | Node.js, Express.js & EJS

A responsive and user-friendly Blog Web Application built using Node.js, Express.js, and EJS. This application allows users to create, view, edit, and delete blog posts through a simple and interactive interface.

The project demonstrates fundamental backend development concepts, including Express routing, middleware, HTTP methods, form handling, EJS templating, and CRUD (Create, Read, Update, Delete) operations. Blog posts are stored temporarily in a JavaScript array without using a database.

## 🚀 Features

- **Create Blog Posts:** Users can create new blog posts by entering a title and content.
- **View All Posts:** Display all available blog posts on the homepage.
- **Edit Blog Posts:** Update the title and content of existing posts.
- **Delete Blog Posts:** Remove unwanted blog posts.
- **Dynamic Content Rendering:** Use EJS templates to display dynamic data.
- **Form Validation:** Prevent submission of empty titles and content.
- **Unique Post Identification:** Generate unique IDs using Node.js Crypto module.
- **Responsive UI:** CSS styling provides a clean and responsive user interface.
- **Temporary Data Storage:** Store blog posts in an in-memory JavaScript array without requiring a database.

## 🛠️ Technologies Used

| Technology    | Purpose                                                          |
| ------------- | ---------------------------------------------------------------- |
| Node.js       | JavaScript runtime environment for backend development           |
| Express.js    | Backend web framework for handling routes and HTTP requests      |
| EJS           | Embedded JavaScript templating engine for dynamic HTML rendering |
| HTML5         | Structure of the web application                                 |
| CSS3          | Styling, layout, and responsive design                           |
| JavaScript    | Application logic and CRUD functionality                         |
| Crypto Module | Generate unique IDs for blog posts                               |
| Path Module   | Handle file and directory paths                                  |
| npm           | Manage project dependencies                                      |

## 📁 Project Structure

```
blog-web-application/
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   └── edit.ejs
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

### File Description

- **server.js:** Main backend file containing Express configuration, middleware, routes, temporary post storage, and CRUD operations.
- **public/style.css:** Contains the website's styling, including navigation, forms, blog cards, buttons, layout, and responsive design.
- **views/index.ejs:** Homepage template used to display all blog posts and provide the post creation form.
- **views/edit.ejs:** Template used to display the selected post's existing information and update it.
- **package.json:** Contains project information, scripts, and required dependencies.
- **package-lock.json:** Records the exact dependency versions installed by npm.
- **README.md:** Project documentation and setup instructions.

## ⚙️ Installation and Setup

Follow these steps to download and run the project locally.

### Prerequisites

Make sure the following are installed:

- Node.js
- npm (included with Node.js)
- Visual Studio Code (recommended)

### Step 1: Clone the Repository

Open PowerShell or the VS Code terminal and run:

```
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```
cd blog-web-application
```

### Step 2: Install Dependencies

Run the following command:

```
npm install
```

This installs the required Node.js packages.

### Step 3: Start the Server

Run:

```
node server.js
```

After successfully starting the server, the terminal displays:

```
Blog server running at http://localhost:3000
```

### Step 4: Open the Application

Open your browser and visit:

```
http://localhost:3000
```

You can now create, view, edit, and delete blog posts.

### Step 5: Stop the Server

To stop the running server, press:

```
Ctrl + C
```

## 🔄 Application Workflow

1. The user opens the homepage.
2. Express handles the incoming GET request and renders the `index.ejs` template.
3. The user enters a blog title and content and submits the form.
4. Express receives the submitted data through `req.body`.
5. The server validates the input and creates a new post with a unique ID.
6. The new post is stored in the `posts` array.
7. Users can edit or delete posts using their unique IDs.
8. EJS dynamically displays the updated blog posts on the homepage.

## 📌 CRUD Operations

| Operation | HTTP Method | Route               | Description                           |
| --------- | ----------- | ------------------- | ------------------------------------- |
| Create    | POST        | `/posts`            | Add a new blog post                   |
| Read      | GET         | `/`                 | Display all blog posts                |
| Edit Page | GET         | `/posts/:id/edit`   | Display the selected post for editing |
| Update    | POST        | `/posts/:id/update` | Save changes to an existing post      |
| Delete    | POST        | `/posts/:id/delete` | Delete a selected blog post           |

## ⚠️ Important Note

This project currently uses an in-memory JavaScript array to store blog posts instead of a database.

Therefore:

- Newly created posts are not permanently saved.
- Changes to existing posts are temporary.
- All changes are lost when the server restarts.
- The initial sample posts are loaded again when the application starts.

A database such as MongoDB or MySQL could be integrated in a future version to provide permanent data storage.

## 🎯 Learning Outcomes

Through this project, I gained practical experience with:

- Building backend applications using Node.js and Express.js.
- Creating and managing REST-style application routes.
- Understanding GET and POST HTTP methods.
- Working with Express middleware.
- Handling HTML form submissions using `req.body`.
- Rendering dynamic web pages using EJS.
- Implementing CRUD operations.
- Managing arrays and objects in JavaScript.
- Generating unique identifiers using the Crypto module.
- Organizing a Node.js project into separate folders and files.
- Designing responsive web interfaces using CSS3.

## 👨‍💻 Author

Developed as a hands-on project to practice backend development and full-stack web application fundamentals using Node.js, Express.js, and EJS.

## **2. PowerShell commands to create and run the project**

If you already have your project folder, open it in VS Code and open the terminal using:

\`Ctrl + \`\`

Make sure the terminal is set to PowerShell.

**Check Node.js and npm:**

```
node -v
npm -v
```

**Install the required dependencies:**

```
npm install express ejs
```

**Start your project:**

```
node server.js
```

**Open the website:**

```
http://localhost:3000
```

\<box border radius="lg" padding={3} gap={2}>\
&#x20; \*\*Useful PowerShell commands\*\*\


| Command             | Purpose                |
| ------------------- | ---------------------- |
| `pwd`               | Show current directory |
| `ls`                | List files and folders |
| `cd folder-name`    | Open a folder          |
| `cd ..`             | Go back one folder     |
| `mkdir folder-name` | Create a folder        |
| `npm install`       | Install dependencies   |
| `node server.js`    | Start the server       |
| `Ctrl + C`          | Stop the server        |

\</box>\


## **3. Prepare your project for GitHub**

Before uploading, create a `.gitignore` file in your main project folder.

Add:

```
node_modules/
.env
```

This prevents your installed dependencies and environment secrets from being uploaded.

Then open PowerShell in your project directory and execute these commands.

**Step 1: Initialize Git**

```
git init
```

**Step 2: Add project files**

```
git add .
```

**Step 3: Commit your project**

```
git commit -m "Initial commit - Blog Web Application"
```

**Step 4: Create a new repository on GitHub**

Go to \<Link url="https\://github.com/new" title="GitHub – Create a new repository"/>.

Suggested repository name:

`blog-web-application`

Choose Public if you want anyone to view your project.

**Step 5: Connect your local project to GitHub**

Replace the URL below with your actual repository URL:

```
git branch -M main

git remote add origin YOUR_GITHUB_REPOSITORY_URL

git push -u origin main
```

Your project should now be uploaded to GitHub.

## **4. Recommended GitHub repository details**

\<box border radius="lg" padding={3} gap={3}>\
&#x20; \*\*Repository name\*\*\


`blog-web-application`

\<divider color="subtle"/>\
**Short description**

A responsive Blog Web Application built using Node.js, Express.js, EJS, HTML, CSS, and JavaScript with CRUD functionality for creating, viewing, editing, and deleting blog posts.

\<divider color="subtle"/>\
**Suggested topics**

&#x20; \<row wrap="wrap" gap={1}>\
&#x20;   {#each ["nodejs","expressjs","ejs","javascript","html","css","blog-application","crud-operations","web-development"] as topic}\
&#x20;     \<badge color="info">{topic}\</badge>\
&#x20;   {/each}\
&#x20; \</row>\
\</box>\


## **5. One important thing before uploading**

Check that your `package.json` contains the correct start script. You can use this structure:

```
{
  "name": "blog-web-application",
  "version": "1.0.0",
  "description": "A responsive blog application built with Node.js, Express.js and EJS",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "ejs": "^3.1.10",
    "express": "^5.1.0"
  }
}
```

If your existing `package.json` already works, don't replace it unnecessarily. The dependency versions should match what is actually installed in your project.

After adding the start script, you can run the application using the shorter command:

```
npm start
```




<img width="1912" height="866" alt="image" src="https://github.com/user-attachments/assets/536b055a-78de-476c-9fb0-17c8868a0550" />


**My recommendation:** Upload the README along with your complete source code. It makes your GitHub repository easier for recruiters, reviewers, and other developers to understand.

If you share your actual project folder or `package.json`, I can check that the README's folder structure, dependencies, and run commands exactly match your project.
