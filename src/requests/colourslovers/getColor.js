import colourLoversApi from '../../api/colourlovers/colourloversApi';

export default async () =>
  colourLoversApi.get('/api/colors/random?format=json');
