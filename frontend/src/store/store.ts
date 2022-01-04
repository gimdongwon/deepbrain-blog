import { makeObservable, observable, action } from 'mobx';
import { Board } from '../model/board';
//import { observer } from 'mobx-react';

class GlobalStore {
  userName: string = ''; //로그인 계정 이름.

  setUserName = (name: string) => {
    this.userName = name;
  };
  boardList: Board[] = [];
  setBoardList = (list: Board[]) => {
    this.boardList = list;
  };
}

const globalStore: GlobalStore = new GlobalStore();

//위에 선언한 내용의 변화를 감시한다.
makeObservable(globalStore, {
  userName: observable,
  setUserName: action,
  boardList: observable,
  setBoardList: action,
});
export default globalStore;
