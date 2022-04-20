import { useCallback } from 'react';
import tableStyles from 'components/common/styles/table.module.css';
import commonStyles from 'styles/common.module.css';

export default function TrafficAccident() {
  const tableColumns = [
    '사고유형대분류',
    '사고유형중분류',
    '사고유형',
    '사고건수',
    '사망자수',
    '중상자수',
    '경상자수',
    '부상신고자수',
  ];
  const handleChange = useCallback(e => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    alert(' 진행 1: 회원가입 클릭 ');
    setUser({
      userid: '',
      password: '',
      email: '',
      name: '',
      phone: '',
      birth: '',
      address: '',
    });
  }, []);

  return (
    <>
      <h1>사고유형별 교통사고 통계</h1>
      <form onSubmit={handleSubmit}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              {tableColumns.map(column => (
                <th key={column}>
                  <span>{column}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={tableColumns.length}>
                <p className={commonStyles.nodata}>현재 데이터가 없습니다.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
