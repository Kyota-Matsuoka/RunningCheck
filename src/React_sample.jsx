//ReactはアプリにおけるUIを作成するためのライブラリ 拡張子は.tsxかjsx
//const コンポーネント名 = () => { //アロー関数が主流　
//  return (
//      <h1>Hello, World!</h1>
//  );
//};
//
//function Button(props){//propsは引数　例：{name}:変数名
//  return (    
//    <button Type="button">クリック</button>　"button"->普通のボタン "submit"-> 送信ボタン　"reset"-> フォームをリセットする
//)Returnは()丸かっこを使う
//複数にしたい場合は
//  return {    
//       <button Type="button">
//          <i>icon </i>
//              <span>クリック</span>
//                          </button>
//             }
//export default Button;
//これでButtonというコンポーネントが追加された. htmlでタグとして使える
//
//Button({title: "Hello, World!"});
//他のスクリプトから読み込む場合はimport コンポーネント名(Button) from 相対パス;
//使う場合は<Button />
//reactは単体では動かないので、viteなどで編集する,reactを使う場合viteというローカルサーバーを立ち上げる
//実行はプロジェクトに移動して、npm  run devと入力する
//srcフォルダにReactのコードを書くのが基本
//main.jsxはエントリーポイント、app.jsxはトップレベル
//Vite作ったら、eslint.config.jsのrulesの最後に
//"no-undef" = "error"; "no-unused-vars" ="error"; "react/prop-types" = "off" 書式設定みたいなもの
//assetsはcssなどの外部ファイル、publicは画像ファイルなど
//package.jsonは関数一覧
function Button(){
    return(
        <button type="button">
            <i>icon</i>
            <span>クリック</span>
        </button>
    )
}
export default React_sample;