import Customer from "./Customer";

export default function TotalCustomer() {
  return (
    <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-x-5 px-5 md:px-0">
      <Customer title="10M+" decs="Total Customers" />
      <Customer title="09M+" decs="Years of Experience" />
      <Customer title="12MK" decs="Total Detination" />
      <Customer title="5.0" decs="Average Rating" />
    </div>
  );
}
