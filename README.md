# Next.js 15 Image Loading Error

This repository demonstrates a common runtime error in Next.js 15 applications related to image loading.  When an image specified using the `src` attribute in an `<img>` tag cannot be found or loaded, it causes the application to crash.  This example shows how to reproduce the error and includes a solution to handle it gracefully.

## Reproducing the Error

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm run dev` to start the development server.
5. Navigate to `/about` in your browser.

You will see that the About page crashes with an error message related to image loading.

## Solution

The solution involves using an error boundary component to catch and handle the error gracefully, preventing the application from crashing.