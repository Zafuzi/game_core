#!/bin/bash

username=zafuzi
gameName=game-core

# check if Game-* exists, if not exit
if [ ! -d "Game-win32-x64" ]; then
  echo "Game-win32-x64 does not exist"
  exit 1
fi

if [ ! -d "Game-linux-x64" ]; then
  echo "Game-linux-x64 does not exist"
  exit 1
fi

if [ ! -d "Game-darwin-x64" ]; then
  echo "Game-darwin-x64 does not exist"
  exit 1
fi

butler push Game-win32-x64 $username/$gameName:win64
butler push Game-linux-x64 $username/$gameName:win64
butler push Game-darwin-x64 $username/$gameName:win64
