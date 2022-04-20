import Link from 'next/link';
import styles from './styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          {' '}
          <Link href="/">메인</Link>{' '}
        </li>
        <li>
          {' '}
          <Link href="/traffic_accident">교통사고 통계</Link>{' '}
        </li>
        <li>
          {' '}
          <Link href="/user/join">회원가입</Link>{' '}
        </li>
        <li>
          {' '}
          <Link href="/user/login">로그인</Link>{' '}
        </li>
        <li>
          {' '}
          <Link href="/user/user-list">사용자목록</Link>{' '}
        </li>
      </ul>
    </nav>
  );
}
