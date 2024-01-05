#!/bin/bash

if test -e dist ; then
	echo "removing old 'dist' ..."
	rm -r dist
fi

echo "creating 'dist' ..."
mkdir dist

echo "copying 'src' to 'dist' ..."
mkdir dist/Game-html5
cp -r src dist/Game-html5

npx electron-packager . Game --platform=linux,win32 --arch=x64 --overwrite --out=dist
npx electron-packager . Game --platform=darwin --arch=x64 --overwrite --out=dist
npx electron-packager . Game --platform=darwin --arch=arm64 --overwrite --out=dist

echo "obfuscating ..."
npx javascript-obfuscator dist/Game-win32-x64/resources/app/src --output dist/Game-win32-x64/resources/app/src
npx javascript-obfuscator dist/Game-linux-x64/resources/app/src --output dist/Game-linux-x64/resources/app/src
npx javascript-obfuscator dist/Game-darwin-x64/Game.app/Contents/Resources/app/src --output dist/Game-darwin-x64/Game.app/Contents/Resources/app/src
npx javascript-obfuscator dist/Game-darwin-arm64/Game.app/Contents/Resources/app/src --output dist/Game-darwin-arm64/Game.app/Contents/Resources/app/src
npx javascript-obfuscator dist/Game-html5/src --output dist/Game-html5/src

echo "done!"
