import Link from 'next/link';
import { c } from '../utils';

export default function MenuLink({ href, active, text }) {
  return (
    <Link href={href}>
      <a
        className={c(
          active ?
            'bg-gray-200' : 
            'hover:bg-gray-100',
          'text-black',
          'px-3',
          'py-2',
          'rounded-md',
          'text-sm',
          'font-medium',
        )}
      >{text}</a>
    </Link>
  );
}