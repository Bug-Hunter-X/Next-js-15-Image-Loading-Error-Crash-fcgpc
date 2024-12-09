```javascript
// pages/about.js
import ErrorBoundary from './ErrorBoundary';

export default function About() {
  return (
    <ErrorBoundary>
      <div>
        <h1>About Page</h1>
        <img src="/missing.jpg" alt="Missing Image" />
      </div>
    </ErrorBoundary>
  );
}
```
```javascript
// pages/ErrorBoundary.js
import { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  function handleError() {
    setHasError(true);
  }

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div>
      {children}
      <ErrorBoundary>
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundary;
```