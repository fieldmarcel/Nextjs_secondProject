export default function loading() {
  return <div>Loading...</div>;
}

// In Next.js 13+ App Router, the loading.tsx is automaticall
// y triggered whenever a server component is waiting for async 
// data. You do not need to manually add a waitForSomeTime function
//  to see the loading state.
