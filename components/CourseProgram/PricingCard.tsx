import CommonButton from "../CommonButton";

const PricingCard = ({
  pricing,
}: {
  pricing: {
    original: number;
    discounted: number;
    discountText: string;
    features: string[];
  };
}) => {
  const { original, discounted, discountText, features } = pricing;
  return (
    <div className="border border-zinc-300 p-6 rounded-lg space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-neutral-500">
          ₹ {discounted}
        </h3>
        <div className="flex gap-4 items-center">
          <span className="line-through text-xl text-zinc-500">
            ₹ {original}
          </span>
          <span className="text-xl font-semibold text-zinc-500">
            {discountText}
          </span>
        </div>
        {/* <button className="mt-4 w-full bg-zinc-500 text-white py-3 rounded-xl font-medium">
          Enrol Now
        </button> */}
        <CommonButton className="w-full mt-4" variant="secondary">Enroll Now</CommonButton>
        <CommonButton className="w-full mt-2" variant="tertiary">Let's Connect</CommonButton>


        {/* <button className="mt-2 w-full border border-zinc-500 text-neutral-500 py-3 rounded-xl font-medium">
          Let’s Connect
        </button> */}
      </div>
      <div>
        <h4 className="text-xl font-medium text-zinc-500 mb-2">
          This Program includes
        </h4>
        <ul className="text-base text-neutral-500 list-disc list-inside space-y-1">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
