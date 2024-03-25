import { IPin, EPinType } from '~/lib/types';

export const PLACES: IPin[] = [
  {
    author: 'Luis Araújo',
    username: 'laraujo7',
    type: EPinType.Sticker,
    city: 'Madrid',
    country: 'Spain',
    coordinates: [40.4213, -3.7011],
    date: '2021-07-06',
    photo: '/photos/laraujo7/madrid.jpg'
  },
  {
    author: 'Luis Araújo',
    username: 'laraujo7',
    type: EPinType.Sticker,
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.5888, 1.8422],
    date: '2021-07-11',
    photo: '/photos/laraujo7/barcelona.jpg'
  },
  {
    author: 'Nelson Estevão',
    username: 'nelsonmestevao',
    type: EPinType.Sticker,
    city: 'Helsinki',
    country: 'Finland',
    coordinates: [60.1673826, 24.9551949],
    date: '2019-01-17',
    photo: '/photos/nelsonmestevao/helsinki.jpg'
  },
  {
    author: 'Nelson Estevão',
    username: 'nelsonmestevao',
    type: EPinType.Special,
    city: 'Gualtar',
    country: 'Portugal',
    coordinates: [41.56157392223945, -8.397397824887639],
    date: '1995-03-29',
    photo: '/photos/nelsonmestevao/gualtar.jpg'
  },
  {
    author: 'Nelson Estevão',
    username: 'nelsonmestevao',
    type: EPinType.Sticker,
    city: 'London',
    country: 'United Kingdom',
    coordinates: [51.5052606, -0.1126733],
    date: '2022-06-11',
    streetview:
      'https://www.google.com/maps/@51.5052606,-0.1126733,3a,60y,348.18h,84.44t/data=!3m6!1e1!3m4!1sG6kgwad45Rn0mxC1nzHK9g!2e0!7i16384!8i8192',
    photo: '/photos/nelsonmestevao/london.jpg'
  },
  {
    author: 'Nelson Estevão',
    username: 'nelsonmestevao',
    type: EPinType.Sticker,
    city: 'Porto',
    country: 'Portugal',
    coordinates: [41.143507, -8.610342],
    date: '2022-08-04',
    photo: '/photos/nelsonmestevao/porto.jpg'
  },
  {
    author: 'Francisco Lira',
    username: 'FranciscoLira',
    type: EPinType.Sticker,
    city: 'Bern',
    country: 'Switzerland',
    coordinates: [46.933938, 7.445919],
    date: '2019-08-12',
    photo: '/photos/FranciscoLira/bern.jpg'
  },
  {
    author: 'Francisco Lira',
    username: 'FranciscoLira',
    type: EPinType.Sticker,
    city: 'Köniz',
    country: 'Switzerland',
    coordinates: [46.919683, 7.436997],
    date: '2019-08-01',
    photo: '/photos/FranciscoLira/koniz.jpg'
  },
  {
    author: 'Filipe Felício',
    username: 'feliciofilipe',
    type: EPinType.Sticker,
    city: 'Amsterdam',
    country: 'Netherlands',
    coordinates: [52.37548607644857, 4.896832185020905],
    date: '2022-02-23',
    photo: '/photos/feliciofilipe/amesterdam.jpg'
  },
  {
    author: 'Filipe Felício',
    username: 'feliciofilipe',
    type: EPinType.Sticker,
    city: 'London',
    country: 'United Kingdom',
    coordinates: [51.5019163, -0.1596214],
    date: '2022-06-10',
    photo: '/photos/feliciofilipe/london.jpg'
  },
  {
    author: ['Filipe Felício', 'Nelson Estevão', 'José Valim'],
    username: ['feliciofilipe', 'nelsonmestevao'],
    type: EPinType.Merch,
    city: 'London',
    country: 'United Kingdom',
    coordinates: [51.486082974689104, -0.19962908422844805],
    date: '2022-06-09',
    photo: '/photos/feliciofilipe,nelsonmestevao/london.jpg'
  },
  {
    author: [
      'José Valim',
      'Chris McCord',
      'Filipe Felício',
      'Nelson Estevão',
      'Luís Araújo',
      'Francisco Lira'
    ],
    username: ['feliciofilipe', 'nelsonmestevao'],
    type: EPinType.Merch,
    city: 'Lisboa',
    country: 'Portugal',
    coordinates: [38.72089957160629, -9.150110630930728],
    date: '2023-04-22',
    photo:
      '/photos/feliciofilipe,nelsonmestevao,laraujo7,FranciscoLira/lisboa.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Sticker,
    city: 'EPFL, Lausanne',
    country: 'Switzerland',
    coordinates: [46.519164417441345, 6.563699123819026],
    date: '2022-06-06',
    photo: '/photos/jpcorreia99/lausanne.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Sticker,
    city: 'Mt. Pilatus, Lucerne',
    country: 'Switzerland',
    coordinates: [46.97946423603654, 8.25622198625752],
    date: '2022-06-12',
    photo: '/photos/jpcorreia99/lucerne.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Sticker,
    city: 'Dublin',
    country: 'Ireland',
    coordinates: [53.345589992774805, -6.27459360543026],
    date: '2022-07-17',
    photo: '/photos/jpcorreia99/dublin.jpg'
  },
  {
    author: 'Daniel Pereira',
    username: 'danielsp45',
    type: EPinType.Sticker,
    city: 'Santa Cruz',
    country: 'United States of America',
    coordinates: [36.955797, -121.972159],
    date: '2022-07-04',
    photo: '/photos/danielsp45/california.jpeg'
  },
  {
    author: 'Gerson Júnior',
    username: 'GresosJ',
    type: EPinType.Sticker,
    city: 'Roma',
    country: 'Italy',
    coordinates: [41.889048, 12.492502],
    date: '2022-07-11',
    photo: '/photos/GresosJ/Coliseu.jpg'
  },
  {
    author: 'Gerson Júnior',
    username: 'GresosJ',
    type: EPinType.Sticker,
    city: 'Napoli',
    country: 'Italy',
    coordinates: [40.840007, 14.251875],
    date: '2022-07-08',
    photo: '/photos/GresosJ/Napoles.jpg'
  },
  {
    author: 'Gerson Júnior',
    username: 'GresosJ',
    type: EPinType.Sticker,
    city: 'San Giorgio, Albanese',
    country: 'Italy',
    coordinates: [39.58367, 16.45292],
    date: '2022-07-04',
    photo: '/photos/GresosJ/SanGiorgio.jpg'
  },
  {
    author: 'Filipe Felício',
    username: 'feliciofilipe',
    type: EPinType.Sticker,
    city: 'Rijeka',
    country: 'Croatia',
    coordinates: [45.33902, 14.416862],
    date: '2022-07-07',
    photo: '/photos/feliciofilipe/rijeka.jpg'
  },
  {
    author: 'Filipe Felício',
    username: 'feliciofilipe',
    type: EPinType.Sticker,
    city: 'Zagreb',
    country: 'Croatia',
    coordinates: [45.813258549667765, 15.977218879620182],
    date: '2022-07-03',
    photo: '/photos/feliciofilipe/zagreb.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo'],
    username: ['feliciofilipe', 'matildeopbravo'],
    type: EPinType.Sticker,
    city: 'Zagreb',
    country: 'Croatia',
    coordinates: [45.81383, 15.97732],
    date: '2022-07-03',
    photo: '/photos/feliciofilipe,matildeopbravo/zagreb2.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo'],
    username: ['feliciofilipe', 'matildeopbravo'],
    type: EPinType.Sticker,
    city: 'Zagreb',
    country: 'Croatia',
    coordinates: [45.8149711819682, 15.97573733926956],
    date: '2022-07-02',
    photo: '/photos/feliciofilipe,matildeopbravo/zagreb1.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo', 'Mariana Rodrigues'],
    username: ['feliciofilipe', 'matildeopbravo', 'marianarodrigues'],
    type: EPinType.Merch,
    city: 'Rijeka',
    country: 'Croatia',
    coordinates: [45.33264760505596, 14.455986441966521],
    date: '2022-07-04',
    photo: '/photos/feliciofilipe,matildeopbravo/rijeka.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo'],
    username: ['feliciofilipe', 'matildeopbravo'],
    type: EPinType.Sticker,
    city: 'Trieste',
    country: 'Italy',
    coordinates: [45.65240883374153, 13.77165131984631],
    date: '2022-07-09',
    photo: '/photos/feliciofilipe,matildeopbravo/trieste.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo'],
    username: ['feliciofilipe', 'matildeopbravo'],
    type: EPinType.Sticker,
    city: 'Pula',
    country: 'Croatia',
    coordinates: [44.867328742659424, 13.850810010552738],
    date: '2022-07-08',
    photo: '/photos/feliciofilipe,matildeopbravo/pula.jpg'
  },
  {
    author: ['Filipe Felício', 'Matilde Bravo', 'José Macedo'],
    username: ['feliciofilipe', 'matildeopbravo', 'josemacedo'],
    type: EPinType.Merch,
    city: 'Ljubljana',
    country: 'Slovenia',
    coordinates: [46.05218163654292, 14.511751028966621],
    date: '2022-07-10',
    photo: '/photos/feliciofilipe,matildeopbravo/liubliana.jpg'
  },
  {
    author: 'Diogo Matos',
    username: 'diogogmatos',
    type: EPinType.Sticker,
    city: 'Zambujeira do Mar',
    country: 'Portugal',
    coordinates: [37.525364, -8.786004],
    date: '2022-08-06',
    photo: '/photos/sassypocoyo/zambujeira1.jpg'
  },
  {
    author: 'Filipe Felício',
    username: 'feliciofilipe',
    type: EPinType.Merch,
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.39437640777792, 2.1750122226070197],
    date: '2022-03-21',
    photo: '/photos/feliciofilipe/barcelona.jpg'
  },
  {
    author: 'Mário Rodrigues',
    username: 'mariorodrigues10',
    type: EPinType.Sticker,
    city: 'Salamanca',
    country: 'Spain',
    coordinates: [40.9588846, -5.6693875],
    date: '2022-08-16',
    photo: '/photos/mariorodrigues10/salamanca.jpg'
  },
  {
    author: 'Vitor Lelis',
    username: 'VitorLelis',
    type: EPinType.Sticker,
    city: 'Campos dos Goytacazes',
    country: 'Brazil',
    coordinates: [-21.75831, -41.337461],
    date: '2022-09-12',
    photo: '/photos/VitorLelis/campos-rio.jpg'
  },
  {
    author: 'Matilde Bravo',
    username: 'matildeopbravo',
    type: EPinType.Sticker,
    city: 'Amsterdam',
    country: 'Netherlands',
    coordinates: [52.377798043025265, 4.897756773311312],
    date: '2022-07-12',
    photo: '/photos/matildeopbravo/amsterdam.jpg'
  },
  {
    author: 'Matilde Bravo',
    username: 'matildeopbravo',
    type: EPinType.Sticker,
    city: 'Paris',
    country: 'France',
    coordinates: [48.85946363288889, 2.287131396878628],
    date: '2022-07-17',
    photo: '/photos/matildeopbravo/paris_camoes.jpg'
  },
  {
    author: 'Matilde Bravo',
    username: 'matildeopbravo',
    type: EPinType.Sticker,
    city: 'Trogir',
    country: 'Croatia',
    coordinates: [43.5159178, 16.2518851],
    date: '2022-08-20',
    photo: '/photos/matildeopbravo/trogir.jpg'
  },
  {
    author: 'Matilde Bravo',
    username: 'matildeopbravo',
    type: EPinType.Sticker,
    city: 'Lund',
    country: 'Sweden',
    coordinates: [55.7074486, 13.1876206],
    date: '2023-01-27',
    photo: '/photos/matildeopbravo/lund.jpeg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Picture,
    city: 'AWS, Dublin',
    country: 'Ireland',
    coordinates: [53.33132494708253, -6.246354987702219],
    date: '2023-01-27',
    photo: '/photos/jpcorreia99/aws_dublin.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Picture,
    city: 'Changgyeonggung, Seoul',
    country: 'South Korea',
    coordinates: [37.58482, 126.97762],
    date: '2023-02-07',
    photo: '/photos/jpcorreia99/changgyeonggung_seoul.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Sticker,
    city: 'Namsam, Seoul',
    country: 'South Korea',
    coordinates: [37.55103, 126.99098],
    date: '2023-02-07',
    photo: '/photos/jpcorreia99/namsam_seoul.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Sticker,
    city: 'Shibuya, Tokyo',
    country: 'Japan',
    coordinates: [35.66269, 139.69526],
    date: '2023-02-18',
    photo: '/photos/jpcorreia99/shibuya_tokyo.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Picture,
    city: 'Meiji Jingu, Tokyo',
    country: 'Japan',
    coordinates: [35.67334, 139.70186],
    date: '2023-02-14',
    photo: '/photos/jpcorreia99/meiji_jingu_tokyo.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Picture,
    city: 'Shitennoji, Osaka',
    country: 'Japan',
    coordinates: [34.65373, 135.51643],
    date: '2023-02-16',
    photo: '/photos/jpcorreia99/shitennoji_osaka.jpg'
  },
  {
    author: 'João Correia',
    username: 'jpcorreia99',
    type: EPinType.Picture,
    city: 'Fushimi Inari, Kyoto',
    country: 'Japan',
    coordinates: [34.96672, 135.77494],
    date: '2023-02-17',
    photo: '/photos/jpcorreia99/fushimi_inari_kyoto.jpg'
  },
  {
    author: 'Gerson Júnior',
    username: 'GresosJ',
    type: EPinType.Sticker,
    city: 'Bragança',
    country: 'Portugal',
    coordinates: [41.716682, -6.857647],
    date: '2022-08-13',
    photo: '/photos/GresosJ/Bragança.jpg'
  },
  {
    author: 'Daniel Pereira',
    username: 'danielsp45',
    type: EPinType.Sticker,
    city: 'Berlin',
    country: 'Germany',
    coordinates: [52.503042, 13.445205],
    date: '2023-04-07',
    photo: '/photos/danielsp45/berlin_wall.jpg'
  },
  {
    author: ['Júlio Pinto', 'Jéssica Fernandes'],
    username: ['JulioJPinto', 'MFJess'],
    type: EPinType.Sticker,
    city: 'Ericeira',
    country: 'Portugal',
    coordinates: [38.96014, -9.41691],
    date: '2022-08-20',
    photo: '/photos/JulioJPinto/ericeira.jpg'
  },
  {
    author: ['Filipe Felício', 'Daniel Pereira'],
    username: ['feliciofilipe', 'danielsp45'],
    type: EPinType.Sticker,
    city: 'Chaves',
    country: 'Portugal',
    coordinates: [41.73677900798794, -7.464917455479609],
    date: '2023-07-06',
    photo: '/photos/feliciofilipe,danielsp45/chaves.jpg'
  },
  {
    author: [
      'Luis Araújo',
      'Francisco Lira',
      'Bárbara Ferreira',
      'João Vilaça',
      'Miguel Brandão',
      'Jéssica Lemos',
      'Márcia Teixeira',
      'Catarina Machado'
    ],
    username: [
      'laraujo7',
      'FranciscoLira',
      'Barbara29',
      'machadovilaca',
      'miguelbrandao',
      'jessicalemos',
      'teixeiramarcia',
      'catarinamachado'
    ],
    type: EPinType.Sticker,
    city: 'Amsterdam',
    country: 'Nederlands',
    coordinates: [52.36119, 4.888508],
    date: '2023-03-12',
    photo:
      '/photos/laraujo7,FranciscoLira,Barbara29,machadovilaca,miguelbrandao,jessicalemos,teixeiramarcia,catarinamachado/amsterdam.jpg'
  },
  {
    author: [
      'Luis Araújo',
      'Francisco Lira',
      'Bárbara Ferreira',
      'João Vilaça',
      'Miguel Brandão',
      'Jéssica Lemos',
      'Márcia Teixeira',
      'Catarina Machado'
    ],
    username: [
      'laraujo7',
      'FranciscoLira',
      'Barbara29',
      'machadovilaca',
      'miguelbrandao',
      'jessicalemos',
      'teixeiramarcia',
      'catarinamachado'
    ],
    type: EPinType.Sticker,
    city: 'Zaandam',
    country: 'Nederlands',
    coordinates: [52.477, 4.81467],
    date: '2023-03-13',
    photo:
      '/photos/laraujo7,FranciscoLira,Barbara29,machadovilaca,miguelbrandao,jessicalemos,teixeiramarcia,catarinamachado/zaandam.jpg'
  },
  {
    author: ['Filipe Felício', 'Luis Araújo'],
    username: ['feliciofilipe', 'laraujo7'],
    type: EPinType.Sticker,
    city: 'Santander',
    country: 'Spain',
    coordinates: [43.462868, -3.801838],
    date: '2023-07-27',
    photo: '/photos/feliciofilipe,laraujo7/santander.jpg'
  },
  {
    author: ['Filipe Felício', 'Luis Araújo'],
    username: ['feliciofilipe', 'laraujo7'],
    type: EPinType.Sticker,
    city: 'Playa de Arnía',
    country: 'Spain',
    coordinates: [43.472395, -3.917568],
    date: '2023-07-28',
    photo: '/photos/feliciofilipe,laraujo7/playa_de_arnia.jpg'
  },
  {
    author: 'Rui Lopes',
    username: 'ruilopesm',
    type: EPinType.Sticker,
    city: 'Sagres',
    country: 'Portugal',
    coordinates: [37.001527, -8.947717],
    date: '2023-08-01',
    photo: '/photos/ruilopesm/sagres.jpg'
  },
  {
    author: 'Rui Lopes',
    username: 'ruilopesm',
    type: EPinType.Sticker,
    city: 'Quarteira',
    country: 'Portugal',
    coordinates: [37.067041, -8.102513],
    date: '2023-08-05',
    photo: '/photos/ruilopesm/quarteira.jpg'
  },
  {
    author: 'Filipe Felício',
    username: 'feliciofilipe',
    type: EPinType.Sticker,
    city: 'Vigo',
    country: 'Spain',
    coordinates: [42.24133604109711, -8.72293898782188],
    date: '2023-08-06',
    photo: '/photos/feliciofilipe/vigo.jpg'
  },
  {
    author: ['João Lobo', 'Rita Camacho'],
    username: ['joaodiaslobo', 'ritacamacho'],
    type: EPinType.Sticker,
    city: 'Amsterdam',
    country: 'Netherlands',
    coordinates: [52.377524, 4.899008],
    date: '2023-06-28',
    photo: '/photos/joaodiaslobo,ritacamacho/amsterdam.jpeg'
  },
  {
    author: ['Luis Araújo', 'Filipe Felício', 'Nelson Estevão'],
    username: ['laraujo7', 'feliciofilipe', 'nelsonmestevao'],
    type: EPinType.Sticker,
    city: 'Berlin',
    country: 'Germany',
    coordinates: [52.5208, 13.41275],
    date: '2023-10-22',
    photo: '/photos/laraujo7,feliciofilipe,nelsonmestevao/berlin.jpg'
  },
  {
    author: 'Gerson Júnior',
    username: 'GresosJ',
    type: EPinType.Sticker,
    city: 'Eindhoven',
    country: 'Netherlands',
    coordinates: [51.4400423, 5.4774228],
    date: '2023-12-26',
    photo: '/photos/GresosJ/Eindhoven.jpg'
  },
  {
    author: ['João Lobo', 'Rita Camacho'],
    username: ['joaodiaslobo', 'ritacamacho'],
    type: EPinType.Picture,
    city: 'Prague',
    country: 'Czech Republic',
    coordinates: [50.09190612588056, 14.406278379658675],
    date: '2024-01-07',
    photo: '/photos/joaodiaslobo,ritacamacho/prague.png'
  },
  {
    author: 'Guilherme Costa',
    username: 'xrosta',
    type: EPinType.Sticker,
    city: 'Horta',
    country: 'Portugal',
    coordinates: [38.580415, -28.7069807],
    date: '2024-01-28',
    photo: '/photos/xrosta/caldeira.jpg'
  },
  {
    author: 'NIAEFEUP',
    username: 'NIAEFEUP',
    type: EPinType.Sticker,
    city: 'Porto',
    country: 'Portugal',
    coordinates: [41.177745794059135, -8.595977428835305],
    date: '2024-03-09',
    photo: '/photos/NIAEFEUP/porto.jpeg'
  },
  {
    author: 'Dário Guimarães',
    username: 'darguima',
    type: EPinType.Sticker,
    city: 'Lisboa',
    country: 'Portugal',
    coordinates: [38.707222222222, -9.1366666666667],
    date: '2024-03-15',
    photo: '/photos/darguima/lisboa_terreiro_paco.jpg'
  }
];
