import { IItem } from './interface';
import img1 from '../image/1.jpg';
import img2 from '../image/2.jpg';
import img3 from '../image/3.jpg';
import img4 from '../image/4.jpg';
import img5 from '../image/5.jpg';
import img6 from '../image/6.jpg';

const data: IItem[] = [
  {
    name: 'The Adam Project',
    info: '2022 | 13+ | 1h 46m | Comedies',
    description:
      'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.',
    actors: 'Starring: Ryan Reynolds, Mark Ruffalo, Jennifer Garner',
    image: `${img1}`,
    id: 100,
  },
  {
    name: 'Red Notice',
    info: '2019 | 18+ | 2h 20m | Military Movies',
    description:
      'Wayward Prince Hal must turn from carouser to warrior king as he faces hostilities from inside and outside the castle walls in the battle for England.',
    actors: 'Starring: Timothée Chalamet, Joel Edgerton, Robert Pattinson',
    image: `${img2}`,
    id: 101,
  },
  {
    name: 'The King',
    info: '2022 | 13+ | 1h 46m | Comedies',
    description:
      'After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.',
    actors: 'Starring:Ryan Reynolds, Mark Ruffalo, Jennifer Garner',
    image: `${img3}`,
    id: 102,
  },
  {
    name: 'Outlaw King',
    info: '2018 | 18+ | 2h 1m | Military Movies',
    description:
      "In 14th-century Scotland, Robert the Bruce claims the crown and leads a fierce uprising to win back the country's independence from English rule.",
    actors: 'Starring:Chris Pine, Aaron Taylor-Johnson, Florence Pugh',
    image: `${img4}`,
    id: 103,
  },
  {
    name: 'Against The Ice',
    info: '2022 | 13+ | 1h 43m | Movies Based on Books',
    description:
      "Exploring Greenland's vast landscape for a lost map, two men must fight to survive. Based on the true story of Denmark's 1909 polar expedition.",
    actors: 'Starring:Nikolaj Coster-Waldau, Joe Cole, Heida Reed',
    image: `${img5}`,
    id: 104,
  },
  {
    name: 'Fatherhood',
    info: '2021 | 13+ | 1h 50m | Movies Based on Books',
    description:
      'A widowed new dad copes with doubts, fears, heartache and dirty diapers as he sets out to raise his daughter on his own. Inspired by a true story.',
    actors: 'Starring:Kevin Hart, Alfre Woodard, Lil Rel Howery',
    image: `${img6}`,
    id: 105,
  },
];

export default data;
