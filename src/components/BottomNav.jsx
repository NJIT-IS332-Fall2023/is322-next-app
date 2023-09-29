// components/BottomNav.js
import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="flex justify-around">
        <Link href="/">
          Home
        </Link>
        <Link href="/page1">
          Page 1
        </Link>
        <Link href="/page2">
          Page 2
        </Link>
      </div>
    </div>
  );
}