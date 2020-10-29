# Game Core
A simple template for creating a new game using electron

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
You may want to customize the packaging command by changing the packag.bat or package.sh file

__To avoid security issues I have used .bat and .sh files to avoid npm script injection attacks__
You can disable scripts on your system by running `npm config set ignore-scripts true`