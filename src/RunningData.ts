// RunningData.ts

import { useState} from "react";

//走った日かどうかを持つ日付の配列 Cでいうstruct(構造体)
export type RanDate = {//booleanとdate型の配列

    date:Date;
    ran : boolean;
}

//let ranDates: RanDate[] = []; // 走った日付の配列　Date型



const [ranDates, setDates] = useState<RanDate[]>([]);
//読み込み->変更->保存(localStrageに)
// 保存されている日付を読み込む
export function loadDates(){//setDates: React.Dispatch<React.SetStateAction<RanDate[]>>) {
    const saved = localStorage.getItem("runningDates");//ローカルに保存していたものを取り出す
    //ranDates = saved
    const loaded = saved
     ? JSON.parse(saved).map((d: {date :string; ran:boolean}) => ({
        date:new Date(d.date),
        ran:d.ran,
    }))
    : [];
    //ranDatesにloadedが入る,ただし非同期なのでuseeffectする必要がある
    setDates(loaded);//useStateで宣言されたsetDatesでないと意味がない
    saveDates(loaded);
    //saveDates(ranDates);
}

// localStorageに保存
function saveDates(ranDates:RanDate[]) {
    localStorage.setItem("runningDates", JSON.stringify(ranDates));
}
  

// 走った日を追加 setDatesを使うことでReactにも知らせて、更新させる
/*
useStateを使って再レンダ―するには、参照渡しではなくコピーする必要がある
prop,setStateを直接変更すると、参照が変わらないため、再レンダ―されない
*/
export function addDate(date: Date,ran:boolean){//,setDates: React.Dispatch<React.SetStateAction<RanDate[]>>) {//Date型のdate
  
  /*
  const dateString = date.toDateString();//string型に変換
  const index = ranDates.findIndex(d => d.date.toDateString() === dateString);//走った日の番号を取得
  
  if (index >= 0) {
    // すでに存在する場合は状態を更新（走らなかったから走ったに変更した場合など）
    ranDates[index].ran = ran;
  } else {
    // 存在しない場合は日付けと状態を追加
    ranDates.push({ date, ran });
  }
    */

//現在の状態を基に新しい状態を作り、それを返して React に渡す
//setDates(prev => {...}) -> setDates は React の state 更新関数
//prev には 現在の state (dates 配列) が入ってくる。
//戻り値に「新しい配列」を返すと、それが dates の次の状態になる
//..prevで新しい配列を作って、setDate({prev})で新しいオブジェクトを作成

  setDates(prev => {//prevにはranDatesが入っている
    const dateString = date.toDateString();
    const index = prev.findIndex(d => d.date.toDateString() === dateString);

    let newDates;
    if (index >= 0) {
        // 既存データ更新
        newDates = [...prev];//...prev で prev をコピー → 新しい配列を作る
        newDates[index] = { ...newDates[index], ran };//newDates[index] を上書きして ran の値だけ変更する
    } else {
        // 新しい日付追加
        newDates = [...prev, { date, ran }];
    }
    //console.log("dates updated:", date);
    saveDates(newDates);//新たに作成したオブジェクトを保存する
    //console.log("日付けを更新します");
    return newDates;
  });
  
  /*
  if (!ranDates.some(d => d.toDateString() === dateString)) {//ranDatesに存在するか確認
    ranDates.push(date);//存在しない場合追加
    saveDates();
  }
    */
}

// 走った日を削除
export function removeDate(date: Date) {
  const dateString = date.toDateString();
  
  //ranDates = ranDates.filter(d => d.date.toDateString() !== dateString);//存在するなら削除
  //saveDates(ranDates);
}

// チェックした日一覧を取得
export function getDates(): RanDate[]{
  return ranDates;
}

// その日を走ったか判定
export function isRan(date: Date): boolean {
  const dateString = date.toDateString();
  const item = ranDates.find(d => d.date.toDateString() === dateString);
  
  return item ? item.ran : false; //一致した日にちのran(boolean)を返す
  //return ranDates.some(d => d.toDateString() === dateString);
}


export function reSetDates(){//setDatesをもう一回する関数
    const reRanDates = ranDates.map(d => ({ ...d }));//getDates();
 
    setDates(reRanDates);//参照ではなく、新たに作成したオブジェクト
}
