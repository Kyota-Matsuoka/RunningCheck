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
//Vite作ったら、eslinst.config.jsのrulesの最後に
//"no-undef" = "error"; "no-unused-vars" ="error"; "react/prop-types" = "off" 書式設定みたいなもの
//assetsはcssなどの外部ファイル、publicは画像ファイルなど
//package.jsonは関数一覧
//Propsは親コンポーネントから子コンポーネントへ値を返す
/*
type Props{
    name: string: 　　　　nameとstringを持った、Props
}
function 関数名Button(変数名:Props(型)){
    {変数名.name}　構造体みたいな感じ
}
呼び出すとき
<Button name="kato"/>と呼び出しと同時に代入ができる

type ButtonProps ={ButtonPropsという型(typeがついているため：interfaceでも可)
    title? :string;　->titleはstring型
}
function Button({ title= "クリック" } :ButtonProps)　:のあとに型名

type Props = {
  title: string;
  children: React.ReactNode;
};
const MyComponent: React.FC<Props> = ({ title, children }) => {
{変数名}はCにおける {"%d",変数}

タグ内でメモを書きたいとき-> {// あいｄ}

{checkBath == true && <p>🛁 お風呂に入りました！</p>}
{true && <タグ>} -> {}で真偽判定して、&&で実行　　cでいうと if(条件式){}
*/
//span汎用タグ（部分装飾） i斜体タグ
/*
関数の書き方
function add(a:number(型)):number(返り値の型){
  return a;
}
const b = add(3); -> これはCでもよく見るやつ

Reactはタグを表示することができる
function HelloAndButton() {
  return (
    <>
      <h1>こんにちは</h1>
      <button>押してね</button>
    </>
  );
}

functionでもtypeでも、前にexportをつけるとほかのファイルからimportできる

再レンダーしたい場合、useStateから値を変更する

値を関数外で使いたい場合

useEffectは描画後になにか処理したいときに使用する

*/
import { useState} from "react";
//import type { RanDate } from "./RunningData";
import { addDate} from './RunningData'


type ButtonProps = {
    ButtonName:string
    ButtonNameB?: string // ? を付けると任意　?をつけると使わなくてもいい
}






function CheckSheet() {
  /*
    const [dates, setDates] = useState<RanDate[]>([]);
    
    useEffect(() => {
        loadDates();//setDates); // 保存済みデータを読み込む
        setDates(getDates());//getDateはRanDate(booleanとDate)を返すため一致しない
          //日にちだけ取得->dates配列に代入
          //setDates(getDates().map(d => d.date));
    }, []);
    */
    /*
    useEffect(() => {
      console.log("dates updated:", dates);
    }, [dates]);
    */

    // RunningDataファイルに保存されたデータの読み込み->setDatesを呼び出してdatesに代入
    //datesはuseStateで管理された配列
    /*
    const [dates, setDates] = useState<Date[]>([]);
    useEffect(() => {
      loadDates(); // 保存済みデータを読み込む
      //setDates(getDates());//getDateはRanDate(booleanとDate)を返すため一致しない
      //日にちだけ取得->dates配列に代入
      setDates(getDates().map(d => d.date));
    }, []);
*/




  //関数内は表示されない、returnで初めて表示される
  // ポップアップ表示の状態 
  //  useStateは変数の状態を保存するだけ
  //setPopup->bool型  setShowPopup->状態を更新する関数 useState-> 初期値
  //set+変数名にすることで、再レンダ―することができる
  const [showPopup, setShowPopup] = useState(false);
  // 走った結果 state-> checkRunningに代入
  const [checkRunning, setRunningCheck] = useState<boolean | null>(null);
  //useState(false);

  // ボタンクリック時に状態を切り替える クリックされたら呼び出される関数：状態を逆にする
  const handleClick = () => {
    setShowPopup(!showPopup);
    //console.log("HEllo:");
  };

  // 結果を選んだとき
  const RunningCheck = (RunningCheck: boolean) => {//(RunningCheck: boolean)は引数
    setRunningCheck(RunningCheck); //結果をRunningCheckに
    setShowPopup(false);   // ポップアップを閉じる

    const today = new Date();///今日の日付けを取得
    //if(RunningCheck === true){//datesにaddDatesする(引数にその日付けを代入する)
    
    addDate(today,RunningCheck);//,setDates);//今日の日付けと走ったかどうかを追加する
    
    //console.log("dates updated:Hello", dates);

  };

  /*
  const RunningCheckDay = () => {//popupが表示されていて、なおかつRunnningCheckが呼ばれたとき
    //その日のRunningCheckをtrueかfalseを配列で管理する
  }
    */

  //  typeとOnclickで二つ使える？　OnClickでhandleClickを呼び出す
  return (
    
    //  showPopupがtrueなら呼び出される
    <>
      <button type="button" onClick={handleClick}>
        <i>今日は走りましたか？</i>
      </button>
      {showPopup && (//走ったかどうかのポップアップを表示
        <div 
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
            backgroundColor: "white",
            border: "2px solid #000",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)"
          }}
        >
          {/*OnClickを押されたタイミングでその日付けを送りたい */}
          <button onClick={() => setShowPopup(false)}>閉じる</button>{/*popupを閉じる*/}
          <button onClick={() => RunningCheck(true)}>走った</button>
          <button onClick={() => RunningCheck(false)}>走らなかった</button>

          
          {/* 結果表示 */}
          {checkRunning == true && <p>走りました！</p>}
          {checkRunning == false && <p>走りませんでした</p>}
          {checkRunning == null && <p>まだチェックしていません</p>}
        </div>
        
      )}
    </>
  );
}

/*
runningCheckを返す関数　
*/



/*
ButtonName:ButtonProps ->ButtonNameという変数はBUttonPropsから引用ｂ
引数として代入したのに関数内で使われなかったらエラーがでるっぽい
*/
function Button({ButtonName}:ButtonProps){
    return(
        
        <button type="button">
            <i>icon</i>
            <span>{ButtonName}</span>
        </button>
        
    )
}
export default Button;
export  {CheckSheet};