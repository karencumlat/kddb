import { GoBookmark } from 'react-icons/go';
import { IoMdHome, IoIosPlayCircle } from 'react-icons/io';
import { BsFillCollectionPlayFill, BsFillCollectionFill } from 'react-icons/bs';

export const navItems = [
  {
    name: 'discover',
    title: 'All Shows',
    icon: <IoMdHome />,
  },
  {
    name: 'latest',
    title: 'On Air',
    icon: <IoIosPlayCircle />,
  },
  {
    name: 'upcoming',
    title: 'Upcoming',
    icon: <GoBookmark />,
  },
  {
    name: 'watching',
    title: 'Watching',
    icon: <BsFillCollectionPlayFill />,
  },
  {
    name: 'watched',
    title: 'Watched',
    icon: <BsFillCollectionFill />,
  },
];
