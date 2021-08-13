import "./style.css";

const ServiceCard = ({ bg, content, img, ...rest }) => {
  return (
    <div {...rest} style={{ background: bg }} className="service_card">
      <img src={img} alt={""} />
      <p className="normal_text">{content}</p>
    </div>
  );
};

export { ServiceCard };
