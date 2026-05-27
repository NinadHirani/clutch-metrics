# Clutch Metrics

Clutch Metrics is a tactical soccer shot-tracking dashboard built as a static web app.

## Features

- Firebase Authentication login and signup
- Team-based shot logging
- Shooter and assister tracking
- Tactical and positional charts (Chart.js)
- Heatmap-style shot placement view
- Archive save/load per user

## Run locally

1. Open `index.html` in your browser.

## Firebase setup

1. Create a Firebase project.
2. Enable Authentication and turn on Email/Password sign-in.
3. In Project settings, add your GitHub Pages domain under Authorized domains.
4. Copy your Firebase web config into the `firebaseConfig` object in `index.html`.
5. Replace the placeholder values in `firebaseConfig` before deploying.
6. Deploy the site to GitHub Pages.

If you want shot data and archives to sync across devices later, move the current `localStorage` data layer to Firestore.

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. In the GitHub repo, go to Settings > Pages.
3. Set Source to `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`.
5. Save and wait for deployment.

Your site will be available at:

`https://<your-github-username>.github.io/<your-repo-name>/`
