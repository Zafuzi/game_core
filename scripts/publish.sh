#!/bin/bash

username=zafuzi
gameName=game-core

# check if Game-* exists, if not exit
if [ ! -d "dist" ]; then
  echo "dist does not exist"
  exit 1
fi

butler push dist/Game-win32-x64 $username/$gameName:win64
butler push dist/Game-linux-x64 $username/$gameName:linux64
butler push dist/Game-darwin-x64 $username/$gameName:osx64
butler push dist/Game-darwin-arm64 $username/$gameName:osxarm64
butler push dist/Game-html5 $username/$gameName:html5


echo "done!"
