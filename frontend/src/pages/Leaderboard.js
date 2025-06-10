import React, { useEffect, useState } from 'react';
import { api, handleApiError } from '../config/api';
import LeaderboardComponent from '../components/history/Leaderboard';

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await api.get('/leaderboard');
        setLeaderboard(response.data);
      } catch (err) {
        setError(handleApiError(err));
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Memuat leaderboard...</div>;
  }
  if (error) {
    return <div className="text-center py-12 text-red-500">{error.message}</div>;
  }
  return (
    <LeaderboardComponent leaderboard={leaderboard} />
  );
};

export default LeaderboardPage; 