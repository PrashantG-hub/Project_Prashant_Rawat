
const DetailModel = ({ displayinfo }) => {
  return (
    <>
      <div className="fixed bottom-0 right-0 left-0 top-0 opacity-[20%] bg-green-600"></div>
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-[200px] w-[150px">
      <h5 >The film focuses on Reyes, a recent college graduate who is bestowed with an armor that grants him superpowers after being accidentally chosen by an ancient alien relic known as the Scarab.</h5>
      <button onClick={displayinfo} className="text-white">
        Hide
      </button>
      </div>
    </>
  );
};

export default DetailModel;
