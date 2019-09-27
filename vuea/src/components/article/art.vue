<template>
	<div class="wrapper">
		<div class="art">
			<div class="date">15.09.2019</div>
			<div class="title">Lorem ipsum dolor sit amet</div>
			<div class="text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit impedit non sapiente eos unde dolores laborum illo odio officia mollitia. Officiis amet, vel, ad explicabo iure sint dignissimos expedita? Quis, aliquam laboriosam rem nulla doloremque sed vel saepe alias facilis voluptatum accusamus quas tenetur quod odio quia libero ea fugiat, sit? Aliquid similique id earum, explicabo corporis blanditiis vitae. Facere nesciunt minima at, ad doloremque maiores, qui animi ex sequi odio rem maxime voluptates blanditiis nemo? Culpa facilis quas vitae quidem reprehenderit eum nam ad! Voluptate labore est, nemo quaerat quos voluptatem pariatur aliquid mollitia vero rem. Eius ipsum suscipit doloremque facere ad quae blanditiis laborum voluptatibus delectus unde veniam odio fuga, dolor saepe? Accusantium error expedita minima placeat voluptatem provident dolores iusto obcaecati neque. Aut tenetur nihil adipisci accusamus sit, magni nisi rem nobis excepturi. Ab possimus sed hic, saepe eum error porro maiores laudantium unde id earum optio necessitatibus maxime reprehenderit totam asperiores repudiandae dolorem natus ratione quibusdam incidunt culpa quam modi! Ex repellat, quidem doloribus mollitia in ipsa obcaecati quam quos error, assumenda aperiam numquam delectus saepe, magni tempora debitis ipsam iusto totam ratione aliquid illo recusandae eos? Minima ipsam cupiditate iure quis ab iste, sed qui. Nesciunt officia neque, nihil magni amet harum facere explicabo dolor eligendi quaerat assumenda quos tenetur veritatis voluptas odit sequi eaque libero ipsum dolore provident est. Nam praesentium qui, unde illo omnis iure accusantium a deserunt, mollitia possimus, ipsa esse vero! Labore beatae natus nesciunt deserunt praesentium dignissimos molestiae error vero tenetur quia laboriosam consectetur autem, aliquid officia quasi rerum nihil placeat dolor qui eligendi, voluptates iusto sed, fugiat nostrum! Excepturi nulla consectetur quo quae, et sapiente consequuntur, illum possimus. Tempore similique doloremque in beatae rerum at repellat commodi aspernatur! Temporibus, asperiores veritatis atque! Vitae iusto dolore fuga, maiores ut debitis possimus sunt ea quidem expedita tempore nostrum eum perferendis, ducimus, blanditiis quisquam! Facere totam, accusamus rem deserunt laborum eius nihil maxime sit accusantium, error cupiditate tempora inventore dolorem eligendi! Atque cum modi corporis praesentium, in officia repellendus quidem iure, temporibus ad perferendis explicabo ullam perspiciatis quasi quaerat expedita! Illum vel consectetur dolor a facilis mollitia voluptate magni fugiat ex at sunt quam, cupiditate animi nobis temporibus. Quibusdam, voluptatum hic veritatis, repellat a eos non incidunt ea asperiores odit, qui quo eaque dolorum ipsam rem fugiat veniam cumque debitis accusantium voluptas expedita alias. Eius delectus pariatur doloremque qui iste iure, quidem quis natus iusto explicabo animi sequi laudantium, velit repudiandae illum. Doloribus obcaecati ratione labore aliquam impedit totam, dolor animi nobis perferendis. Ea animi eaque repellendus veniam velit illo repudiandae, nemo voluptate, incidunt est odio, laudantium, blanditiis repellat aliquam possimus minima. Commodi, soluta! Et, quidem, modi. Doloremque neque ratione nostrum perferendis necessitatibus possimus explicabo, fuga tempore, esse aut ad, magnam, optio impedit dolorem sequi perspiciatis culpa deleniti. Doloribus aliquid, consequatur atque magni rerum esse laborum quibusdam optio quas accusamus architecto reprehenderit facilis sapiente eos eum dicta, ducimus dolores. Omnis ad molestiae esse sequi pariatur dolorem, consequatur praesentium, placeat veniam cupiditate architecto, ducimus at. Veniam soluta eveniet expedita debitis, doloremque quisquam nostrum nobis ipsum, deserunt eum cumque eius consectetur error reprehenderit? Quasi quis suscipit dolor animi dicta reprehenderit minima neque autem ducimus unde necessitatibus, voluptate dolore totam, maiores nemo aut rerum debitis nisi nihil, distinctio magni laborum ratione ipsa incidunt! Cum veritatis, adipisci quos iste blanditiis dolorum, nam nulla quasi, eius architecto soluta nobis fuga, eos inventore. Fuga voluptatibus eligendi error soluta nam consequatur at illo quisquam perferendis! Qui accusantium eum, est quibusdam, magnam tempora necessitatibus dolores suscipit tenetur impedit ipsum ex odit inventore repudiandae tempore molestias amet obcaecati ipsam nisi quisquam. Tempore odio perspiciatis, id nostrum molestiae aliquid sit veritatis soluta expedita cupiditate placeat vero, repellendus culpa, fugit voluptate. Cum voluptate, in, minima qui quia ut temporibus ullam blanditiis suscipit. 
			</div>
			<div class="tags">
				<div class="t_title">Теги:</div>
				<div class="tag">it, python, js</div>
			</div>
			<div class="info">
				<div class="like"><el-button class="ic" icon="el-icon-star-off" type="primary" size="mini" plain>10</el-button></div>
				<div v-show="islike" class="islike"><el-button class="ic" icon="el-icon-star-on" size="mini" type="primary" plain><span>10</span></el-button></div>
				<div class="count"><el-button class="ic" icon="el-icon-chat-square" type="warning" size="mini" plain>5</el-button></div>
			</div>
		</div>
		<div class="comD">
			<div class="comD_title">Комментарии <span>1</span></div>
			<div class="commentD">
				<div class="commentInfo">
					<div class="c_auth">admin</div>
					<div class="c_date">15.09.2019</div>
				</div>
				<div class="com_text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam eos iure provident, consequatur dolorem dolor! Pariatur possimus sequi numquam corporis molestias, veniam unde labore voluptatem, eveniet quas deleniti error. Consequatur, voluptates ex velit quas, dolores delectus fuga rem labore, cum consequuntur illum excepturi quis explicabo a magnam recusandae! Qui deleniti quo sit optio aliquam totam vero incidunt repellat eius necessitatibus doloribus dolore vitae, voluptas, dignissimos quas reprehenderit eaque quia accusantium, hic beatae impedit. Repellat iusto unde temporibus blanditiis
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
  name: 'art',

  data() {
    return {
      islike: false
    };
  },
};
</script>


<style lang="css" scoped>
	.wrapper{
		background: #fff;
		margin-top: 10px;
	}
	.art{
		padding: 10px 0;
	}
	.title{
		font-size: 1.7em;
		padding:20px 0; 
		font-weight: bolder;
	}
	.date{
		font-size: 0.8em;
	}
	.tags{
		margin-top: 20px;
		display: flex;
		align-items: center;
	}
	.tag{
		color: #4E6680
	}
	.t_title{
		font-weight: bolder;
		margin-right: 10px;
	}
	.info{
		margin-top: 20px;
		display: flex;
		align-items: center;
	}
	.info div{
		margin-right: 10px;
	}
	.comD_title{
		font-size: 1.8em;
		padding: 10px 0;
		border-bottom: 1px solid #000;
	}
	.comD_title span{
		color: #4E6680 
	}
	.commentD{
		margin: 10px 0;
	}
	.commentInfo{
		display: flex;
		align-items: center;
	}
	.c_auth{
		font-weight: bolder;
		margin-right: 10px;
	}
	.com_text{
		margin-top: 5px;
	}
	.ic{
		font-size: 1.1em;
	}
	@media (max-width: 480px){
		.art{
			padding: 20px 15px;
		}
		.comD{
			padding: 20px 15px;
		}
	}
</style>