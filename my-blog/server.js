
// ============================================================
// 1. IMPORT REQUIRED MODULES
// ============================================================

// Import Express.js.
// Express is a web framework for Node.js.
// It makes it easier to create a web server and handle requests
// such as GET (view a page) and POST (submit a form).
const express = require("express");

// Import Node.js's built-in crypto module.
// We will use crypto.randomUUID() to generate a unique ID
// for every blog post.
// A unique ID helps us identify a particular post when
// editing or deleting it.
const crypto = require("crypto");

// Import Node.js's built-in path module.
// It helps us create file and folder paths correctly
// on different operating systems, such as Windows and Linux.
const path = require("path");


// ============================================================
// 2. CREATE EXPRESS APPLICATION
// ============================================================

// Create an Express application.
// The app variable will be used to configure our server,
// add middleware, define routes, and start the server.
const app = express();

// Set the port number to 3000.
// Our website will be available at http://localhost:3000.
const PORT = 3000;


// ============================================================
// 3. MIDDLEWARE
// ============================================================

// Middleware is code that runs between receiving a request
// and sending a response.
//
// express.urlencoded() reads form data submitted by users.
// For example, when someone submits the Create Post form,
// Express uses this middleware to read the title and content.
//
// extended: true allows Express to parse richer form data,
// including nested objects and arrays.
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder.
//
// Static files include CSS, JavaScript, images, etc.
// For example, if the browser requests /style.css,
// Express looks for public/style.css and sends it.
//
// __dirname means the directory where this server.js file exists.
// path.join() safely joins the folder paths together.
app.use(express.static(path.join(__dirname, "public")));


// ============================================================
// 4. CONFIGURE EJS TEMPLATE ENGINE
// ============================================================

// Tell Express that we are using EJS as our template engine.
//
// EJS allows us to write HTML and insert dynamic JavaScript data.
// For example, we can display blog posts using an EJS loop.
app.set("view engine", "ejs");

// Tell Express where our EJS files are stored.
//
// Our EJS files, such as index.ejs and edit.ejs,
// are located inside the "views" folder.
app.set("views", path.join(__dirname, "views"));


// ============================================================
// 5. TEMPORARY STORAGE FOR BLOG POSTS
// ============================================================

// Create an array named posts.
//
// An array is used to store multiple blog post objects.
// Each object represents one blog post.
//
// IMPORTANT:
// This is temporary in-memory storage.
// The posts will disappear when the server restarts.
// We are not using a database in this project.

let posts = [

  // FIRST BLOG POST
  {
    // Generate a unique ID for this post.
    // randomUUID() creates a unique identifier.
    id: crypto.randomUUID(),

    // Store the blog post title.
    title: "Welcome to My Blog",

    // Store the blog post content.
    content: "This is my first blog post. Welcome to my website!",

    // Store the date and time when this post was created.
    // new Date() gives the current date and time.
    date: new Date()
  },

  // SECOND BLOG POST
  {
    // Generate another unique ID.
    id: crypto.randomUUID(),

    // Store the second post's title.
    title: "Why I Love Coding",

    // Store the second post's content.
    content: "Coding allows us to turn creative ideas into real applications.",

    // Store the current date and time.
    date: new Date()
  }

];


// ============================================================
// 6. HOME PAGE - DISPLAY ALL BLOG POSTS
// ============================================================

// app.get() defines a GET route.
//
// "/" represents the homepage.
// When someone visits http://localhost:3000/,
// this route will execute.
//
// req = request received from the browser.
// res = response that the server sends back.
app.get("/", (req, res) => {

  // Render the index.ejs file.
  //
  // "index" means Express will look for views/index.ejs.
  //
  // { posts: posts } sends our posts array to the EJS file.
  // The EJS file can now use the variable "posts"
  // to display all blog posts.
  res.render("index", { posts: posts });

});


// ============================================================
// 7. CREATE POST - ADD A NEW BLOG POST
// ============================================================

// app.post() defines a POST route.
//
// "/posts" is the URL where the Create Post form submits data.
//
// When a user fills in the title and content and clicks
// the Create Post button, this route executes.
app.post("/posts", (req, res) => {

  // Extract title and content from the submitted form.
  //
  // req.body contains the form data.
  //
  // This is called object destructuring.
  // It is a shorter way of writing:
  // const title = req.body.title;
  // const content = req.body.content;
  const { title, content } = req.body;


  // Validate the submitted form data.
  //
  // trim() removes spaces from the beginning and end.
  // For example: "  Hello  " becomes "Hello".
  //
  // ! means NOT.
  // !title?.trim() checks whether title is missing,
  // null, undefined, empty, or contains only spaces.
  //
  // || means OR.
  // So if either title OR content is invalid,
  // the condition becomes true.
  if (!title?.trim() || !content?.trim()) {

    // Send a 400 Bad Request response.
    // This means the submitted information is invalid.
    //
    // return stops the route from executing further.
    return res.status(400).send("Title and content are required.");

  }


  // Create a new blog post object.
  const newPost = {

    // Generate a unique ID for the new post.
    // This ID will help us edit or delete this particular post.
    id: crypto.randomUUID(),

    // Store the title after removing extra spaces.
    title: title.trim(),

    // Store the content after removing extra spaces.
    content: content.trim(),

    // Store the current date and time.
    date: new Date()

  };


  // Add the new post to the beginning of the posts array.
  //
  // unshift() inserts an item at the beginning of an array.
  // This means the newest blog post appears first.
  posts.unshift(newPost);


  // Redirect the user to the homepage.
  // The homepage will display the newly created post.
  res.redirect("/");

});


// ============================================================
// 8. EDIT PAGE - DISPLAY AN EXISTING POST
// ============================================================

// This GET route displays the edit page.
//
// :id is a route parameter.
// It represents the unique ID of the blog post.
//
// Example URL:
// /posts/12345/edit
//
// Here, 12345 represents the post ID.
app.get("/posts/:id/edit", (req, res) => {

  // Find the post whose ID matches the ID in the URL.
  //
  // find() searches an array and returns the first matching item.
  //
  // p represents each post in the posts array.
  //
  // req.params.id gets the ID from the URL.
  const post = posts.find(p => p.id === req.params.id);


  // Check whether the requested post exists.
  //
  // If find() cannot find the post, it returns undefined.
  // !post checks whether the post does not exist.
  if (!post) {

    // Send a 404 Not Found response.
    // return stops the route if the post does not exist.
    return res.status(404).send("Post not found.");

  }


  // Render the edit.ejs page.
  //
  // Pass the selected post object to the EJS template.
  // The edit.ejs page can display its current title and content.
  res.render("edit", { post: post });

});


// ============================================================
// 9. UPDATE POST - SAVE EDITED BLOG POST
// ============================================================

// This POST route updates an existing blog post.
//
// When the user edits a post and clicks Save Changes,
// the edit form sends its data to this route.
//
// :id identifies which post needs to be updated.
app.post("/posts/:id/update", (req, res) => {

  // Find the post using the ID from the URL.
  const post = posts.find(p => p.id === req.params.id);


  // Check whether the post exists.
  if (!post) {

    // If the post does not exist, send a 404 response.
    return res.status(404).send("Post not found.");

  }


  // Get the new title and content from the submitted edit form.
  const { title, content } = req.body;


  // Check that the new title and content are not empty.
  // trim() removes spaces from both ends.
  if (!title?.trim() || !content?.trim()) {

    // Send an error if either field is empty.
    return res.status(400).send("Title and content are required.");

  }


  // Update the existing post's title.
  //
  // We are changing the title property of the post object.
  post.title = title.trim();


  // Update the existing post's content.
  post.content = content.trim();


  // Redirect the user to the homepage.
  // The homepage will now show the updated post.
  res.redirect("/");

});


// ============================================================
// 10. DELETE POST - REMOVE A BLOG POST
// ============================================================

// This POST route deletes a blog post.
//
// The URL contains the ID of the post to delete.
// Example: /posts/12345/delete
app.post("/posts/:id/delete", (req, res) => {

  // Check whether a post with the given ID exists.
  //
  // some() checks whether at least one array item
  // satisfies the given condition.
  //
  // It returns true if the post exists, otherwise false.
  const postExists = posts.some(p => p.id === req.params.id);


  // If the post does not exist, send a 404 response.
  if (!postExists) {

    return res.status(404).send("Post not found.");

  }


  // Remove the selected post from the array.
  //
  // filter() creates a new array containing only the items
  // that satisfy the condition.
  //
  // p.id !== req.params.id means:
  // Keep every post whose ID is NOT equal to the selected ID.
  //
  // The selected post is therefore excluded.
  posts = posts.filter(p => p.id !== req.params.id);


  // Redirect the user to the homepage.
  // The deleted post will no longer appear.
  res.redirect("/");

});


// ============================================================
// 11. START THE SERVER
// ============================================================

// app.listen() starts the Express server.
//
// PORT is 3000, so the application listens on port 3000.
//
// The callback function runs after the server starts successfully.
app.listen(PORT, () => {

  // Display a message in the terminal.
  // This helps us know that the server is running.
  console.log(`Blog server running at http://localhost:${PORT}`);

});
