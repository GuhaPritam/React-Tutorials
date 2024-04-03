/*
-------------- Example of And (&&) Operator ------------------
*/
function App() {
    const isLoggedIn = true;
  
    return (
      <div>
        {isLoggedIn && <p>Welcome, User!</p>}
      </div>
    );
  }
  
  export default App;
  