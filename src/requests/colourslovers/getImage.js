import colourLoversApi from '../../api/colourlovers/colourloversApi';

export default async () =>
  colourLoversApi.get('/api/patterns/random?format=json');
