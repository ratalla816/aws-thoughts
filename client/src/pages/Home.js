import React, { useState, useEffect } from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/users');
        const jsonData = await res.json();
        // sort the array by createdAt property ordered by descending values
        const data = jsonData.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
        setThoughts([...data]);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

// In the preceding statement, we used the useEffect hook to request all the users' thoughts to render on the component mount event. 
// Notice that we used the default GET method to fetch the data from the database and store as a JSON into the data constant. 
// Because the database call uses the scan method, we must sort the data ourselves, which we accomplish by using the sort method. 
// We could also apply the sort operation in the server to offload processing to the cloud instead of the client.
// Once the data is sorted, we store the data using the useState setter method, setThoughts. 
// Notice that the dependency array is empty, so this fetch will only be invoked once when the component mounts.
// It's a good idea to use a try...catch block in case the web service call doesn't work.

return (
  <main>
    <div className="flex-row justify-space-between">
      <div className="col-12 mb-3">
        <ThoughtForm />
      </div>
      <div className={`col-12 mb-3 `}>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} setThoughts={setThoughts} title="Some Feed for Thought(s)..." />
        )}
      </div>
    </div>
  </main>
);
};

export default Home;
