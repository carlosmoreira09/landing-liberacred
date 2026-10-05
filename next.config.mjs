/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site estatico: o build gera `out/` e o Caddy serve os arquivos direto.
  // Nao ha processo Node em producao, entao nada aqui pode depender de
  // servidor (headers(), rewrites, rotas de API).
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
