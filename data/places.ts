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
    username: ['castro_gmr', 'el_pach89', 'focus.jiujitsubraga'],
    type: EPinType.Merch,
    city: 'Lisboa',
    country: 'Portugal',
    coordinates: [38.742848143417774, -9.128892489772834],
    date: '2022-12-18',
    photo: '/photos/openlisboa2022.png'
  }
];
