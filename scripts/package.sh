#!/bin/bash
npx electron-packager . Game --platform=darwin,linux,win32 --arch=x64 --overwrite
