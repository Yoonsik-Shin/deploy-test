/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    generateBuildId: () => "yoonsik",

    // getServerSideProps가 들어있는 페이지 제외하고 빌드
    exportPathMap: () => ({
        "/": { page: "/" },
        "/boards": { page: "/boards" },
        "/404": { page: "/404" },
    }),
};

module.exports = nextConfig;
