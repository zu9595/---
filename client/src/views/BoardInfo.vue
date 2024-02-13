<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <td>{{boardInfo.no}}</td>
                    <th>작성일</th>
                    <td>{{boardInfo.created_date}}</td>
                    <th>이름</th>
                    <td>{{boardInfo.writer}}</td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>{{boardInfo.title}}</td>
                </tr>
            </thead>
            <tbody>
                <td>{{boardInfo.content}}</td>
            </tbody>
            <button @click="goUpdateBoard(boardInfo.no)">수정</button>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            boardInfo: {}
        }
    },
    created() {
        let bno = this.$route.query.boardNo;
        this.getBoardInfo(bno);
    },
    methods: {
        async getBoardInfo(no) {
            let result = await axios.get(`/api/boards/${no}`)
                .catch(err => console.log(err));
            this.boardInfo = result.data;
            console.log(this.boardInfo);
        },
        goUpdateBoard(num){
            this.$router.push({path: '/NewBoardUpdate', query: {"boardNo": num}})
        }
    }
}
</script>