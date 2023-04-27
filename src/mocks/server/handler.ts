import { rest } from 'msw';
import { CardType } from '../../types/form';

const cards: CardType[] = [
  {
    id: '8Rp2S7QXjkTy',
    image: 'https://i.postimg.cc/Kz8VQ2XX/eb164ff2-0966-5601-beaf-2d54971223e3.jpg',
    title: 'Peperomia Ginny',
    author: 'Leona Crisp',
    description:
      'Peperomia ginny is a colorful species in the Piperaceae, or pepper, family. Native to Venezuela and West Indies, they are easy to care for houseplants that add a welcome burst of color to any room.',
    location: 'Venezuela',
    likes: '2304',
    requirements:
      'Peperomia ginny light preference is for indirect bright light, but it can withstand medium light levels. However, a Peperomia with pink edges will have more vibrant colors if it receives bright light.',
  },
  {
    id: '4Mn9B6ZLecFh',
    image: 'https://i.postimg.cc/05Mxqp4T/6-FERN-BIRDS-NEST-HURRICANE-1.png',
    title: 'Bird’s Nest Fern',
    author: 'David Marse',
    description:
      "Bird's nest ferns are naturally epiphytic, meaning they grow on the surface of other plants. In their rainforest homes, they can be found growing high in the crooks of trees.",
    location: 'Australia',
    likes: '4454',
    requirements:
      "The key to a healthy Bird's nest fern is providing it with ample warmth, humidity, and moisture.",
  },
];

const handlers = [
  rest.get('https://mock-server-api-two.vercel.app/catalog', (req, res, ctx) => {
    return res(ctx.json(cards), ctx.delay(150));
  }),

  rest.get('https://mock-server-api-two.vercel.app/catalog', (req, res, ctx) => {
    const searchTerm = req.url.searchParams.get('q');
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm?.toLowerCase() ?? '')
    );

    if (filteredCards.length === 0) {
      return res(ctx.status(200), ctx.json([]));
    } else {
      return res(ctx.status(200), ctx.json(filteredCards));
    }
  }),
];

export default handlers;
