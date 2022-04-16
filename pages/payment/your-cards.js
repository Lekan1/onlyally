import ProfileNavBar from "../../components/ProfileNavBar.jsx";
import { MdOutlineAutoDelete } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";

function CardPayment() {
  const cardDetails = [
    {
      cardNumber: "xxxx xxxx xxxx 4242",
      type: "Visa",
      markAs: "marks As Default",
    },
    {
      cardNumber: "xxxx xxxx xxxx 4242",
      type: "Visa",
      markAs: "marks As Default",
    },
    {
      cardNumber: "xxxx xxxx xxxx 4242",
      type: "Visa",
      markAs: "marks As Default",
    },
  ];

  return (
    <div>
      <div className="flex p-2 rounded shadow">
        <ProfileNavBar className="w-24 mb-8" />
        <div className=" w-full px-1 mx-auto pt-3 mr-24  mt-12 bg-white ">
          <p className=" ml-10 mt-4 font-bold flex justify-center ">
            Your Card
          </p>
          <div className="grid grid-cols-3 gap-y-4 gap-x-6">
            {cardDetails.map((card, index) => (
              <div
                className="w-[335px] h-32 shadow-md shadow-gray-200  border border-gray-300 space-y-2.5 rounded-lg p-3 "
                key={index}
              >
                <p className="text-[16px] font-bold ">{card.cardNumber}</p>
                <p className="font-semibold  text-[13px] text-gray-600">
                  {card.type}
                </p>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <p className="font-semibold text-[#3BB9FF] text-[13px] mt-1">
                      {card.markAs}
                    </p>
                    <MdOutlineAutoDelete className="text-[30px] text-gray-600 font-light" />
                  </div>
                  <BsCreditCard2Front className="text-[30px] text-gray-400" />
                </div>
              </div>
            ))}
            <div className="w-80 h-30 shadow-md shadow-gray-200  border border-gray-300 space-y-2 rounded-lg p-2 ">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPayment;
