import { IPin, EPinType } from '~/lib/types';

export const PLACES: IPin[] = [
  {
    author: ['Filipe Felício', 'João Castro','Diogo Pacheco', 'Pedro Brandão'],
    username: ['felicio.filipe', 'castro_gmr', 'el_pach89', 'focus.jiujitsubraga'],
    type: EPinType.Merch,
    city: 'Santa Tecla, Braga',
    country: 'Portugal',
    coordinates: [41.54749135373692, -8.407603528933668],
    date: '2022-12-27',
    photo: '/photos/braga.png'
  },
  {
    author: ['João Castro', 'Pedro Brandão', 'Diogo Pacheco'],
    username: ['castro_gmr', 'focus.jiujitsubraga', 'el_pach89'],
    type: EPinType.Merch,
    city: 'Lisboa Open 2022',
    country: 'Portugal',
    coordinates: [38.742848143417774, -9.128892489772834],
    date: '2022-12-18',
    photo: '/photos/open_lisboa_2022.png'
  },
  {
    author: ['Filipe Felício','João Castro', 'Pedro Brandão'],
    username: ['felicio.filipe','castro_gmr', 'focus.jiujitsubraga'],
    type: EPinType.Merch,
    city: 'Estádio D. Afonso Henriques, Guimarães',
    country: 'Portugal',
    coordinates: [41.44612371111313, -8.300825155979249],
    date: '2023-01-27',
    photo: '/photos/guimaraes.png'
  },
  {
    author: ['Filipe Felício','João Castro', 'Pedro Brandão'],
    username: ['felicio.filipe','castro_gmr', 'focus.jiujitsubraga'],
    type: EPinType.Merch,
    city: 'Ponte de Lima',
    country: 'Portugal',
    coordinates: [41.79274805002724, -8.54324705605865],
    date: '2023-01-14',
    photo: '/photos/ponte_de_lima.png'
  },
  {
    author: ['Filipe Felício','João Santos'],
    username: ['felicio.filipe', 'gracielisboa_jiujitsu'],
    type: EPinType.Merch,
    city: 'Lisboa',
    country: 'Portugal',
    coordinates: [38.73934071555419, -9.130128685492226],
    date: '2023-04-20',
    photo: '/photos/gracie_lisboa.png'
  },
];
