<template>
    <div>
        <ul>
            <li>
                <div class="commentInfo">
                    <div class="ava"><img :src="data.author.avatar" alt=""></div>
                    <div class="c_auth">{{data.author.username}}</div>
                    <div class="c_date">{{data.date | dataform}}</div>
                </div>
                <div class="com_text">
                    {{data.text}}
                </div>
                <div class="reply">
                    <span>reply</span>
                </div>
                <ul v-if="data.children && data.children.length">
                    <node v-for="child in data.children" :data="child"></node>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "node",
    props: [
        'data'
    ]
}
</script>

<style lang="css" scoped>
.commentInfo{
	display: flex;
	align-items: center;
}
.c_auth{
	font-weight: bolder;
	margin-right: 10px;
}
.c_date{
    font-size: 0.8em;
}
ul {
    list-style: none;
    margin: 13px 0 0 -7%;
}
.ava img{
    width: 25px;
    height: 25px;
    border-radius: 5px;
    margin-right: 10px;
}
.com_text{
    margin: 2px 0;
}
.reply{
    font-size: 0.8em;
    color:deepskyblue;
}
</style>