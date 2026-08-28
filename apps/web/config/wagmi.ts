import { http, createConfig } from 'wagmi';
import { baseSepolia, polygonAmoy } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
  chains: [baseSepolia, polygonAmoy],
  connectors: [
    injected(),
  ],
  transports: {
    [baseSepolia.id]: http(),
    [polygonAmoy.id]: http(),
  },
});
