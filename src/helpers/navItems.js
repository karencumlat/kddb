import { GoBookmark } from 'react-icons/go';
import { IoMdHome, IoIosPlayCircle } from 'react-icons/io';
import { BsFillCollectionPlayFill, BsFillCollectionFill } from 'react-icons/bs';

export const navItems = [
  {
    name: 'DISCOVER',
    title: 'All Shows',
    icon: <IoMdHome />,
  },
  {
    name: 'LATEST',
    title: 'On Air',
    icon: <IoIosPlayCircle />,
  },
  {
    name: 'UPCOMING',
    title: 'Upcoming',
    icon: <GoBookmark />,
  },
  {
    name: 'WATCHING',
    title: 'Watching',
    icon: <BsFillCollectionPlayFill />,
  },
  {
    name: 'WATCHED',
    title: 'Watched',
    icon: <BsFillCollectionFill />,
  },
];
