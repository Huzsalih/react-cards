
function Card({ title, description, imgSrc }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px', margin: '16px', display: 'inline-block' }}>
      <img src={imgSrc} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
