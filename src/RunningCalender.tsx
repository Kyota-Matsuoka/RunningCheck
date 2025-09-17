import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState,useEffect } from 'react';
//import { CheckSheet } from './Button'

import type { RanDate } from "./RunningData";//型をimportする場合はtypeをつける必要がある
import {loadDates,addDate, removeDate, isRan, getDates } from './RunningData';
//レンダーとはコンポーネントの関数が実行されて、JSX（見た目の設計図）から実際の DOM が作られ、画面に反映されること
/*
1.コンポーネント関数（例：RunningCalendar）が呼ばれる
2.return (...) の中の JSX が評価される
3.React がそれを元に「仮想DOM」を作る
4.画面の DOM と比べて差分だけを更新して表示する

・レンダーが行われるタイミング
初回表示（マウント時）
useState の state が変わったとき (setDates, setShowPopup など)
props が変わったとき
親コンポーネントが再レンダーされたと
*/
//propsを使うときはtypeを使う 例えばcssでUI名　classNameを使いたい場合　propsでstring型を定義する必要がある



//更新を行えるようにする
type RunningCalendarProps = {
  className?: string;
}


function RunningCalendar({className}:RunningCalendarProps) {


  /*
  // このdatesに走ったかどうかの日にちをつけたい-> checkRunning == true -> datesに保存
  const [dates, setDates] = useState<Date[]>(() =>{ // 走った日を保持
    // ブラウザに保存されているデータを取得
  const saved = localStorage.getItem("runningDates");
  // データがあれば文字列からDate型に変換して返す、なければ空配列
  return saved ? JSON.parse(saved).map((d: string) => new Date(d)) : [];
  });
  
  useEffect(() => {//useEffectはコンポーネントがレンダーされた後に実行される処理
  /*
  第1引数の関数は「副作用（サイドエフェクト）」を実行する場所。
  第2引数の配列 [依存する値] が変わるたびに再実行される。dates
  依存配列が空 [] なら、初回レンダー時だけ実行される。
  
  //日付けが変わるたびに更新される　ブラウザを閉じても消えない
  // dates の中身が変わるたびに localStorage に保存
  localStorage.setItem("runningDates", JSON.stringify(dates));
  }, [dates]);
  */
  const [dates, setDates] = useState<RanDate[]>([]);
  useEffect(() => {
    loadDates(); // 保存済みデータを読み込む
    setDates(getDates());//getDateはRanDate(booleanとDate)を返すため一致しない
    //日にちだけ取得->dates配列に代入
    //setDates(getDates().map(d => d.date));
  }, []);


  const handleClickDay = (date: Date) => {
    //console.log("HEllo");
    const dateString = date.toDateString();//日付を文字列に変換 
    if (dates.some(d => d.date.toDateString() === dateString)) {
      // すでに走った日なら削除
      setDates(dates.filter(d => d.date.toDateString() !== dateString));
    } else {
      // 走った日記録追加
      //setDates([...dates, date]);
    }
  };



  return (//カレンダー表示(ranDateに含まれている日にちは色を付ける)
    <Calendar
      calendarType="iso8601"//曜日を表示
      showNavigation // ← 年月と左右の矢印を表示
      prevLabel="◀"
      nextLabel="▶"
      prev2Label={null} // ← 「≪」ボタンを非表示（年単位ジャンプしたくないなら）
      next2Label={null}
    
      onClickDay={handleClickDay}//OnClickDayはその日をクリックしたときに呼び出される ->日付けをクリックしたらポップアップを表示する
      
      //tileClassNameはカレンダーの一日にクラス名をつけるプロパティ
      // => {  }にすると複数の処理を行える
      tileClassName={({ date }) => {//日付をクリックした時の処理　日付をクリックした時に色付け 引数({date})を受け取る
        //dates.some(d => d.date.toDateString() === date.toDateString())//datesは走った日の配列　Array.prototype.some() は 配列の中に条件を満たす要素が1つでもあるか調べるメソッド
        
        // dates は RanDate[] 型
        const ranDate = dates.find(d => d.date.toDateString() === date.toDateString());

        if (!ranDate) {
          // まだチェックしていない日
          return className ?? '';
        }
        //d=> d.toDateString() === date.toDateString() は 走った日とクリックした日が同じか調べる
        
        //checkをつけたらその日にclassNameを割り当てる ← props で受け取った className を合体
        return ranDate.ran
        ? `${className ?? ''} ranCheckDate`//checkをつけて、走った日にはranCheckdateというclassnameをつける
        : className ?? 'notRanCheckDate'// チェックしたけど、走っていない日にはnotRanCheckDateというclassName を適用  

      }}


    />
  );
}
//ranDateに含まれている場合classNameを割り当てる


export default RunningCalendar;