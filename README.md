# A NodeJs Project Kickstarter Biolerplate
Clean, minimalistic boilerplate to start your NodeJs project. It helps you structure your file in a more conventional way.

NodeJS is far too powerful to be limited to just running your website. Whether building a website, communicating with the database or writing a script to automate a file process, you can't go wrong with NodeJS.

### ⭐ Good for
  - Building a worker scripts.
  - Stand-alone scripting and automation tool.
  - Fully customizable project.
  - Forcing you to write clean-easy-to-read code.
  - Clean file structuring.
  - Following standard naming conventions so collaborators/team8s can understand easily your code.
  - Securing your login and api key details by using environment variable -- [dotenv](https://github.com/motdotla/dotenv)

### 📂 Prerequisites
 - NodeJs, git installed in your local environment.
 - 🔐 **.env** file -- Yes you need this! 🔑🔑🔑

### 📝 Usage
1. Clone the repo to your local environment.
  - In the command prompt run the following commands:
    ```
    $ git clone https://github.com/yortrosal/nodejs-boilerplate.git
    $ cd nodejs-boilerplate
    ```
2. run ```$ npm install``` to install initial dependencies.
3. Make sure you have .env file available.
   Or generate one:  ```$ cp .env.example .env``` (edit it with your secret keys and other credentials)
4. Once you have the .env file setup in the main directory.
5. run ▶️ ```$ npm start``` to start the program. It will run the script from the app.js file.
6. Modify the package.json file. Edit the project name and other stuff.
7. Finally, start and build your application scripts. Customize your project however you like.

### Recommendation
Try to add your script and other stuff inside /core folder.
If you want to run specific script inside the ./core folder, try to set it in package.json script.
For example, when you try to run ```./core/hello-world.js```, instead of ```cd core && node hello-world```, you can use a command that was set in package.json file ```npm run hello-world```.

###  📘 Why is it important to use env file?
It has variety of usage. Find out [more](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7).
But the sole purpose of using .env file for our project is to secure our credentials such as logins, api keys, and other important stuff. It is important not to include your .env file in our repository specially when your project is public.

### 🏗 Project Structure
    nodejs-boilerplate
      ├── core
      │   ├── custom-subfolder-example
      │   │   ├── example1.js
      │   │   ├── example2.js
      │   │   └── example3.js
      │   │
      │   ├── access-credentials.js
      │   └── hello-world.js
      │
      ├── .env.example
      ├── .env  // store all your credentials here
      ├── .plans
      ├── .gitignore
      ├── app.js
      ├── package.json
      └── README.md

### Initial Dependency
  - [ckey](https://www.npmjs.com/package/ckey) - a [dotenv](https://github.com/motdotla/dotenv) helper for accessing process.env object from sub-directory.

### Storing Credentials in .env file
  - This is where you put your login credentials, secret keys, and other confidential information. Never include when you commit your repository. Make sure it is included in .gitignore file so it wont be included.

### 💬 Tech Support
  - If things went wrong, google it first. People ahead of you have had similar issues in the past and solved it.
  - Last resort. -- Contact Jorge. He'd be happy to help you.

### 🎩 Authors
  - Jorge Rosal - [GitHub](https://github.com/yortrosal)

### Contribution
  - Feel free to submin PR. Please follow ESLINT Rule. 
### 📜 License
The MIT License (MIT) Jorge Rosal
