import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dolorem adipisci excepturi ut, rerum recusandae enim officia neque
        necessitatibus, dignissimos ex ipsam, ullam magni similique illo modi
        minus nobis illum?
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
