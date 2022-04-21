function Social({ social }) {
  const title = social.name;
  return (
    <div
      className={`flex  rounded-sm text-center items-center  text-white ${social.color}  py-1 w-[210px] my-1`}
      onClick={social[`${title}`]}
    >
      <div className="mx-4">{social.img}</div>
      <div className="px-4 font-bold text-center ">{social.name}</div>
    </div>
  );
}
export default Social;
