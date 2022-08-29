import "./App.css";
import "./css/layout.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
function App() {
  //let count = 0;
  //count++;
  //console.log(count);
  const [count, setCount] = useState(10);
  const [items, setItems] = useState([]); // 상태변화
  useEffect(() => {
    axios.get("http://127.0.0.1:8099/items").then((res) => {
      setItems(res.data);
    });
  });
  // useEffect는 시작하자 마자 한번 실행해야 하는 코드 window.load()랑 비슷
  // 컴퍼넌트는 태그 여러개 만들어서 집어넣은거 주로 반복해야하는 것들을 편이하게 쓰기 위한 코드 뭉테기
  // props를 주입받아서 쓴다.
  // const items = [
  //   {
  //     title: "나는 타이틀 01",
  //     imgSrc: "https://gdimg.gmarket.co.kr/2522773369/still/400?ver=1661741861",
  //     price: "12,000",
  //     link: "http://www.daum.net",
  //   },
  //   {
  //     title: "나는 타이틀 02",
  //     imgSrc: "https://gdimg.gmarket.co.kr/2522773369/still/400?ver=1661741861",
  //     price: "12,000",
  //     link: "http://www.daum.net",
  //   },
  //   {
  //     title: "나는 타이틀 03",
  //     imgSrc: "https://gdimg.gmarket.co.kr/2522773369/still/400?ver=1661741861",
  //     price: "12,000",
  //     link: "http://www.daum.net",
  //   },
  //   {
  //     title: "나는 타이틀 04",
  //     imgSrc: "https://gdimg.gmarket.co.kr/2522773369/still/400?ver=1661741861",
  //     price: "12,000",
  //     link: "http://www.daum.net",
  //   },
  // ];
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={function () {
          setCount(count + 1);
          console.log(count);
        }}
      >
        {count}
      </button>
      <ul className="itemList">
        {/* 리액트에서는 map은 리시트 출력용, filter은 걸려서 출력할때, reduce */}
        {/* map은 배열을 순환해서 결과를 돌려준다. */}
        {items.map((item, idx) => {
          return <Item imgSrc={item.imgSrc} title={item.title} price={item.price} />;
        })}
        {/* <Item title={items[0].title} imgSrc={items[0].imgSrc} price={items[0].price} link={items[0].link} />
        <Item title={items[1].title} imgSrc={items[1].imgSrc} price={items[1].price} link={items[1].link} />
        <Item title={items[2].title} imgSrc={items[2].imgSrc} price={items[2].price} link={items[2].link} /> */}

        {/* <Item title="나는 타이틀 02" imgSrc="https://gdimg.gmarket.co.kr/2522773369/still/400?ver=1661741861" price="11,000" link="http://www.daum.net" />
        <Item title="나는 타이틀 03" imgSrc="https://gdimg.gmarket.co.kr/2522773369/still/400?ver=1661741861" price="13,000" link="http://www.daum.net" />
        <Item title="나는 타이틀 04" imgSrc="https://gdimg.gmarket.co.kr/2522773369/still/400?ver=1661741861" price="130,000" link="http://www.daum.net" />
        <Item title="나는 타이틀 05" imgSrc="https://gdimg.gmarket.co.kr/2522773369/still/400?ver=1661741861" price="12,000" link="http://www.daum.net" /> */}
      </ul>
    </div>
  );
}

export default App;

