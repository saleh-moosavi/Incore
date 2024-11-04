import Customer from "./Customer";

export default function TotalCustomer() {
  return (
    <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-x-2 md:gap-x-5 px-5 md:px-0">
      <Customer title="10M+" desc="Total Customers" />
      <Customer title="09M+" desc="Years of Experiences" />
      <Customer title="12MK" desc="Total Destination" />
      <Customer title="5.0" desc="Average Rating" />
    </div>
  );
}
