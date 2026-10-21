import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BANFF CLEANING - 밴프 클리닝',
    short_name: 'BANFF CLEANING',
    description: '밴프 클리닝 B2B 현장 오더 매칭 시스템',
    start_url: '/orders',
    display: 'standalone',
    background_color: '#1E3653',
    theme_color: '#1E3653',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}