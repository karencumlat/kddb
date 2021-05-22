import { GoBookmark } from 'react-icons/go';
import { IoMdHome, IoIosPlayCircle } from 'react-icons/io';
import { BsFillCollectionPlayFill, BsFillCollectionFill } from 'react-icons/bs';

export const navItems = [
  {
    name: 'DISCOVER',
    title: 'All Shows',
    icon: <IoMdHome />,
    path: `${process.env.PUBLIC_URL}/discover`,
  },
  {
    name: 'LATEST',
    title: 'On Air',
    icon: <IoIosPlayCircle />,
    path: `${process.env.PUBLIC_URL}/latest`,
  },
  {
    name: 'UPCOMING',
    title: 'Upcoming',
    icon: <GoBookmark />,
    path: `${process.env.PUBLIC_URL}/upcoming`,
  },
  {
    name: 'WATCHING',
    title: 'Watching',
    icon: <BsFillCollectionPlayFill />,
    path: `${process.env.PUBLIC_URL}/watching`,
  },
  {
    name: 'WATCHED',
    title: 'Watched',
    icon: <BsFillCollectionFill />,
    path: `${process.env.PUBLIC_URL}/watched`,
  },
];
