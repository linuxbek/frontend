import Image from 'next/image';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
        <Header />
        <div className="flex p-16">
          <Sidebar />
        </div>
    </main>
  )
}
