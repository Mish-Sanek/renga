export const allWorks = [
  {
    id: 0,
    picture: '/img/works/freedom-finance.jpg',
    slug: 'freedom-finance',
    name: 'Freedom Finance',
    tags: ['Brand Identity', 'Product Design']
  },
  {
    id: 1,
    picture: '/img/works/ape-ai.jpg',
    slug: 'ape-ai',
    name: 'Ape AI',
    tags: ['Product Design', 'Branding']
  },
  {
    id: 2,
    picture: '/img/works/vodafone.jpg',
    slug: 'vodafone',
    name: 'Vodafone',
    tags: ['Campaign Design', 'Motion']
  },
  {
    id: 3,
    picture: '/img/works/cruz.jpg',
    slug: 'cruz',
    name: 'Cruz',
    tags: ['Product Design', 'Branding', 'Motion']
  },
  {
    id: 4,
    picture: '/img/works/ff-card-series.jpg',
    slug: 'ff-card-series',
    name: 'Freedom Finance — Card series',
    tags: ['3D Motion']
  },
  {
    id: 5,
    picture: '/img/works/nvo.jpg',
    slug: 'nvo',
    name: 'NVO',
    tags: ['Brand Identity', 'Web Design']
  },
  {
    id: 6,
    picture: '/img/works/nobleblocks.jpg',
    slug: 'nobleblocks',
    name: 'Nobleblocks',
    tags: ['Product Design', 'Branding', 'Motion']
  },
  {
    id: 7,
    picture: '/img/works/pancakeswap.jpg',
    slug: 'pancakeswap',
    name: 'Pancakeswap',
    tags: ['Product Design', 'Branding', 'Motion']
  },
  {
    id: 8,
    picture: '/img/works/looksrare.jpg',
    slug: 'looksrare',
    name: 'Looksrare',
    tags: ['Product Design', 'Branding', 'Motion']
  },
  {
    id: 9,
    picture: '/img/works/ape-ai-achivement-badges.jpg',
    slug: 'ape-ai-achivement-badges',
    name: 'Ape AI — Achievement Badges',
    tags: ['Illustration', 'Branding']
  },
  {
    id: 10,
    picture: '/img/works/pancake.jpg',
    slug: 'pancake',
    name: 'Pancake',
    tags: ['3D Motion', 'Illustration']
  },
  {
    id: 11,
    picture: '/img/works/velas.jpg',
    slug: 'velas',
    name: 'Velas',
    tags: ['Brand Identity', 'Product Design ', 'Motion']
  },
  {
    id: 12,
    picture: '/img/works/pranzo.jpg',
    slug: 'pranzo',
    name: 'Pranzo',
    tags: ['Brand Identity', 'Motion Design']
  },
  {
    id: 13,
    picture: '/img/works/tama.jpg',
    slug: 'tama',
    name: 'Tama',
    tags: ['Product Design', 'Branding']
  },
  {
    id: 14,
    picture: '/img/works/eclipse.jpg',
    slug: 'eclipse',
    name: 'Eclipse — Parlays fun',
    tags: ['Illustration', '3D Motion']
  },
  {
    id: 15,
    picture: '/img/works/polkadot.jpg',
    slug: 'polkadot',
    name: 'Polkadot',
    tags: ['Campaign Design', 'Motion Design']
  },
  {
    id: 16,
    picture: '/img/works/bobaswap.jpg',
    slug: 'bobaswap',
    name: 'Bobaswap',
    tags: ['Illustration', 'Branding', 'Motion']
  },
  {
    id: 17,
    picture: '/img/works/nft-collections.jpg',
    slug: 'nft-collections',
    name: 'NFT Collections',
    tags: ['Illustration', 'Art Direction']
  },

]

export function getWorksByCategory(category) {
  if (category === 'all') {
    return allWorks
  }

  console.log(category)

  return allWorks.filter((item) => item.tags.includes(category))
}
