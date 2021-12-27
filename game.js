export default function*(){
	
	let cmd = yield ["( ・p・)ようこそ！はじめるには1をおしてね！", "はじめる", "おわる"];
	if(cmd === 2) return ["( - p -)zzz"];

	let fullness = 10;
	
	cmd = yield ["( ・p・)朝ご飯はなにを食べよう？", "ハム", "こんにゃく", "たべない"];
	let msg;
	if(cmd === 1) {fullness += 5; msg = "( ・p・)-3 おなかいっぱい";}
	if(cmd === 2) {fullness += 1; msg = "( ・〜・)もぐもぐ";}
	if(cmd === 3) {fullness -= 3; msg = "(ゝ・p・)ひもじい...";}
	
	yield [msg + "\nまんぷくど：" + fullness, "つづける"];
	
	
	return ["( 　)　)おしり"];
}