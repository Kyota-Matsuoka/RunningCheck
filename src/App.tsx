/*
ここはhtmlのタグとかを記述
<h1>～<h6> : 見出し（大きいタイトルから小見出しまで）
<p> : 段落（文章）
<span> : 部分的に装飾するときに使うインライン要素
<strong> : 強調（太字）
<em> : 強調（斜体）
<br> : 改行
<hr> : 区切り線

<img> : 画像を表示する
<a> : リンクを作る（他のページやサイトへ飛ばす）

<div> : 汎用的な箱（ブロック要素）
<section> : コンテンツのまとまり
<header> : ページや記事のヘッダー部分
<footer> : ページのフッター部分
<nav> : ナビゲーション（メニューなど）
<main> : ページのメインコンテン

<form> : フォーム全体をまとめる
<input> : 入力欄（テキスト、チェックボックスなど）
<button> : ボタン
<label> : 入力欄のラベル（説明文）
<textarea> : 複数行の入力欄

<ul> : 順序なしリスト（・で並ぶ）
<ol> : 順序付きリスト（1,2,3…）
<li> : リストの項目

<i> : 斜体（最近はアイコンフォント用で使われることが多い）
<span> : インラインの装飾用
<small> : 小さい文字

<button>属性
type : ボタンの種類（button, submit, reset）
disabled : 押せなくす
title : ホバーしたときに表示する説明
onClick : React ではよく使うイベントハンドラ

<div>属性
id : 要素の一意の名前
class（React では className） : CSSを当てる用
title : ホバーしたときの説明

<input> の属性
type : 入力の種類（text, password, checkbox, radio, email, number など）
placeholder : 入力前に表示するヒント
value : 入力の値
name : フォーム送信時の名前
required : 必須入力にす

<img> の属性
src : 画像のパス
alt : 画像が表示できないときの代替テキスト
width / height : サイズ
*/




/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


ButtonやCheckSheetなどを呼びだしているこのAPPが親コンポーネント
*/
import './App.css'
import  { CheckSheet } from './Button'
import RunningCalendar from './RunningCalender'
//<div>は箱     クラス名＝"クラス名"でcssにあるそのクラスの書式設定にする
function App() {
  
  return(
    //要素を複数使うときは<></>で囲む
    //ButtonのButtonNameという引数にButtonを代入
    <>
  
        
      <h1 title = "RunningCheck">RunningCheck</h1>

      <div title = "CheckSheet">       
          <CheckSheet /> 
      </div>
      <div className = "RunningCalendar">
          <RunningCalendar className="running-calendar"/>
      </div>

    </>
    //Reactで作ったタグはTitle使えない->divタグで囲って使う
    //hは見出し
  )
  /*　もともと入っていたコード
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Reactan</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
  */
}

export default App
