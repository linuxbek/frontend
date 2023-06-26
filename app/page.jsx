import Image from 'next/image';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import Posts from './components/Posts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Header />
      <div className="flex p-16 gap-5">
        <Sidebar />
        <div className="flex flex-col">
          <Menu />
          <Posts />
        </div>
      </div>
    </main>
  );
}
