<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                    <th>댓글 수</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(board, idx) in boardList" :key="idx" @click="goBoardInfo(board.no)">
                    <td>{{ board.no }}</td>
                    <td>{{ board.title }}</td>
                    <td>{{ board.writer }}</td>
                    <td>{{ board.created_date }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            boardList: []
        }
    },
    created() {
        this.getBoardList();
    },
    methods: {
        async getBoardList() {
            let result = await axios.get('/api/boards')
                .catch(err => console.log(err));
            let list = result.data;
            this.boardList = list;
        },
        goBoardInfo(no) {
            this.$router.push({ path: '/BoardInfo', query: { "boardNo": no } });
        }
    }
}
</script>