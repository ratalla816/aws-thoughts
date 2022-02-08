import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThoughtList from '../components/ThoughtList';



const Profile = props => {
  const { username: userParam } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [thoughts, setThoughts] = useState([{
    username: userParam,
    createdAt: '',
    thought: '',
  }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/users/${userParam}`);
        const data = await res.json();
        console.log(data);
        setThoughts([...data]);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userParam]);

// Notice a similar pattern here compared to the useEffect hook in the Home component. 
// Namely, we do the following things:
// Use the userParam sourced from the React Router to retain the username from the ThoughtList component.
// Pass the userParam to the database in the URL.
// Set the state with the database response.
// Set the dependency array in the hook to reflect the dependency for the username with userParam.

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${userParam}'s` : 'your'} profile.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-9">
        {!isLoaded ? (
            <div>Loading...</div>
          ) : (
          <ThoughtList thoughts={thoughts} title={`${userParam}'s thoughts...`} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
