const quiz = [
	{
		question: "私の好きなものはどれでしょう？",
		answers: ["音楽鑑賞", "ディズニー", "スポーツ", "映画鑑賞"],
		correct: "水瀬伊織",
	},
	{
		question: "私の好きな歌手（グループ・バンド）は何でしょう？",
		answers: ["aiko", "YUI", "backnumber", "EXILE"],
		correct: "backnumber",
	},
	{
		question: "私があいみょんの歌で最も好きな歌は何でしょう",
		answers: ["裸の心", "マリーゴールド", "君はロックを聴かない", "ハルノヒ"],
		correct: "裸の心",
	},
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
	document.getElementById("js-question").textContent = quiz[quizIndex].question;

	//$マークで HTMLのオブジェクトが入っていることを表す
	// $button[0].textContent = answers[0];
	// $button[1].textContent = answers[1];
	// $button[2].textContent = answers[2];
	// $button[3].textContent = answers[3];
	//  ↓ リファクタリング後のコード
	let buttonIndex = 0;
	while (buttonIndex < buttonLength) {
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
		buttonIndex++;
	}
};
setupQuiz();

const clickHandler = (e) => {
	if (quiz[quizIndex].correct === e.target.textContent) {
		window.alert("凄い！正解だよ！");
		score++;
	} else {
		window.alert("残念！不正解だね！");
	}
	quizIndex++;

	if (quizIndex < quizLength) {
		//問題数がまだあればこちらを実行
		setupQuiz();
	} else {
		//問題数がもうなければこちらを実行
		window.alert(
			"終了だよ！君の正解数は" + score + "/" + quizLength + "だって！"
		);
	}
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
	$button[handlerIndex].addEventListener("click", (e) => {
		clickHandler(e);
	});
	handlerIndex++;
}
