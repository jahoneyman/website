const SectionTitle = ({ title, color = "black" }) => {
  return (
    <div className={`text-4xl tracking-wider text-center font-bold text-${color}`}>{title}</div>
  );
};

export default SectionTitle;
