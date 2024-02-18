const useGenerateMockLeaderboard = () => {
  const mockLeaderboard = [];
  const totalUsers = 60;
  const yourPosition = 54;
  for (let rank = 1; rank <= totalUsers; rank++) {
    const userName = rank === yourPosition ? "You" : "Name";
    const xp =
      rank === yourPosition
        ? "0/233"
        : `${Math.floor(Math.random() * 233)}/233`;

    mockLeaderboard.push({
      rank,
      name: userName,
      xp,
      avatar: `https://randomuser.me/api/portraits/men/1.jpg`,
    });
  }

  return mockLeaderboard;
};

export default useGenerateMockLeaderboard;
