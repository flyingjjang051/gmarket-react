export default function Item(props) {
  return (
    <li>
      <a href={props.link}>
        <div>
          <img src={props.imgSrc} alt="" />
        </div>
        <div>
          <span>1+1</span>
          <div>{props.title}</div>
          <div>
            <span>{props.price}</span>
            <span>원</span>
          </div>
        </div>
      </a>
    </li>
  );
}
