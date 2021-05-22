import { GoBookmark } from 'react-icons/go';
import { IoMdHome, IoIosPlayCircle } from 'react-icons/io';
import { BsFillCollectionPlayFill, BsFillCollectionFill } from 'react-icons/bs';

export const navItems = [
  {
    name: 'DISCOVER',
    title: 'All Shows',
    icon: <IoMdHome />,
    path: `/discover`,
  },
  {
    name: 'LATEST',
    title: 'On Air',
    icon: <IoIosPlayCircle />,
    path: `/latest`,
  },
  {
    name: 'UPCOMING',
    title: 'Upcoming',
    icon: <GoBookmark />,
    path: `/upcoming`,
  },
  {
    name: 'WATCHING',
    title: 'Watching',
    icon: <BsFillCollectionPlayFill />,
    path: `/watching`,
  },
  {
    name: 'WATCHED',
    title: 'Watched',
    icon: <BsFillCollectionFill />,
    path: `/watched`,
  },
];
