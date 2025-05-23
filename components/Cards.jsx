export default function Cards({ data }) {
  return data.map((data) => (
    <div className="card" key={data.id}>
      <a href="#">
        <img src={data.thumb} alt={data.series} />
        <h4>{data.series}</h4>
      </a>
    </div>
  ));
}
