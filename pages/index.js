import { useState, useEffect, useCallback } from 'react';
import tableStyles from 'components/common/styles/table.module.css';
import axios from 'axios';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  const getTime = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/now');
      setCurrentTime(data.now);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getTime();
  }, []);

  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th>
            <h2>HOME</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div id="timeZone">
              <h1>현재시간: {currentTime}</h1>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
