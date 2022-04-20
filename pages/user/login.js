import { useCallback } from 'react';
import tableStyles from 'components/common/styles/table.module.css';

export default function Login() {
  const handleChange = () => {};

  const handleSubmit = useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th colSpan={2}>
              <h1>로그인</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>사용자ID</b>
            </td>
            <td>
              <input type="text" name="userid" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <b>비밀번호</b>
            </td>
            <td>
              <input type="text" name="password" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit">로그인</button>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
