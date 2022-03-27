import React, { useCallback, useState } from 'react';
import styled from "styled-components"
import MemoList from './MemoList';
import { useMemoList } from '../hooks/useMemoList';


const App: React.FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList();
  const [text, setText] = useState<string>("");

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index);
  }, [deleteTodo]);
  return (
    <>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete}/>
    </>
  );
}

const SButton = styled.button`
  margin-left: 16px;
`;

export default App;
