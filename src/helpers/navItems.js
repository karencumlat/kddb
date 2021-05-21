import { GoBookmark } from 'react-icons/go';
import { IoMdHome, IoIosPlayCircle } from 'react-icons/io';
import { BsFillCollectionPlayFill, BsFillCollectionFill } from 'react-icons/bs';

export const navItems = [
  {
    name: 'DISCOVER',
    title: 'All Shows',
    icon: <IoMdHome />,
    path: '/kddb/discover',
  },
  {
    name: 'LATEST',
    title: 'On Air',
    icon: <IoIosPlayCircle />,
    path: '/kddb/latest',
  },
  {
    name: 'UPCOMING',
    title: 'Upcoming',
    icon: <GoBookmark />,
    path: '/kddb/upcoming',
  },
  {
    name: 'WATCHING',
    title: 'Watching',
    icon: <BsFillCollectionPlayFill />,
    path: '/kddb/watching',
  },
  {
    name: 'WATCHED',
    title: 'Watched',
    icon: <BsFillCollectionFill />,
    path: '/kddb/watched',
  },
];
