export default function Country(props) {
  return (
    <div>
      <h1>{props.country.name}{' '}
        <button onClick={() => props.onDelete((props.country.id))}><i class="fa-solid fa-trash"></i></button>
      </h1>
      <p>
        Gold Medals: {props.country.gold}{' '}
      </p>
    </div>
  );
}