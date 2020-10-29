# Game Core
A simple template for creating a new game using electron

This template uses electron and simple HTML, CSS, and JavaScript with no other dependencies. This means you will need to learn the Canvas API or include another JS game engine of your choice.

The games code is in local.js.

I have set electron to use preload.js to set up a simple bridge between your game and the application that electron produces. That way you can use things like node to access local files or connect to a database.

## Requirements
- electron
- electron-packager
- yarn or npm

## Installation
- Clone this repo
- Run `yarn` or `npm` in the cloned directory
- Run `run.bat` on windows or `run.sh` on unix

## Packaging
- run `package.bat` on windows or `package.sh` on unix

You may want to customize the packaging command by changing the package.bat or package.sh file

__To avoid security issues I have used .bat and .sh files to avoid npm script injection attacks__
You can disable scripts on your system by running `npm config set ignore-scripts true`

Also I take zero resposiblity if you use this. It's just helpful to me, and I thought others might like to use it as well.