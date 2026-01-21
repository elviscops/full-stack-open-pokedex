#!/bin/bash

echo "Installing dependencies..."
npm install

echo "Building frontend..."
npm run build

echo "Build complete."