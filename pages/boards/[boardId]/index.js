import { useRouter } from "next/router";

export default function BoardsPage() {
    const router = useRouter();

    return <div>게시판/동적페이지{router.query.boardId}</div>;
}
