<template>
    <div>
        <tr>no.</tr>
        <tr><input type="text" v-model="boardInfo.no" readonly></tr>
        <tr>제목</tr>
        <tr><input type="text" v-model="boardInfo.title"></tr>
        <tr>작성자</tr>
        <tr><input type="text" v-model="boardInfo.writer"></tr>
        <tr>내용</tr>
        <tr><textarea cols="30" rows="10" v-model="boardInfo.content"></textarea></tr>
        <tr>작성일자</tr>
        <tr><input type="date" v-model="boardInfo.created_date"></tr>
        <button>저장</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            boardInfo: {
                no: "",
                title: "",
                writer: "",
                content: null,
                created_date: 0,
                updated_date: null
            },
            searchMake: 0,
            isUpdated: false
        }
    },
    created() {
        this.searchMake = this.$route.query.boardNo;
        if(this.searchMake != 0 && this.searchMake != undefined){
            this.getBoardInfo();
        }else{
            this.boardInfo.created_date = this.getToday();
        }
    },
    methods: {
        async getBoardInfo(){
            let result = await axios.get(`/api/boards/${this.searchMake}`)
                .catch(err => console.log(err));
            let info = result.data;
            info.created_date = this.getToday(info.created_date);

            this.boardInfo = info;
            this.isUpdated = true;
        },
        getToday(value){
            let date = value != undefined && value != 0 ? new Date(value) : new Date();
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        }
    }
}
</script>