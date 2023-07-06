const QuantityCard = ({data}) => {
  return (
    <div className="py-2 card">
      <div className="bg-light rounded d-flex align-items-center justify-content-start p-4">
        {data.icon}
        <div className="ms-3">
          <p className="mb-2">{data.title}</p>
          <h6 className="mb-0">{data.quantity}</h6>
        </div>
      </div>
    </div>
  );
}

export default QuantityCard;