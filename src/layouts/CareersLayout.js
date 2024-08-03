import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto
        tempore ipsam necessitatibus numquam at voluptatibus quaerat hic ea,
        ducimus, reiciendis vel odio sapiente molestias laborum ullam earum sed
        atque?
      </p>

      <Outlet />
    </div>
  );
}
