// eslint-disable-next-line react/prop-types
export const CardCategorias = ({ name, Icon, img }) => {
  console.log(img);
  return (
    <div className={`category__list__item ${name}`}>
    <h4>{name}</h4>
    {/* {Icon ? <Icon /> : null} */}
    {Icon && <Icon />}
  </div>
  );
};
