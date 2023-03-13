import { useRouter } from "next/router";

export default function BoardsPage() {
    const router = useRouter();

    return <div>게시판/동적페이지{router.query.boardId}</div>;
}

export const getServerSideProps = () => {
    // 서버사이드 렌더링시 out 폴더 생성 불가
    // next.config.js에서 exportPathMap으로 제외시키기
};
