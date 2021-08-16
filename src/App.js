import './App.css';

import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
    </div>
  );
}

export default App;
