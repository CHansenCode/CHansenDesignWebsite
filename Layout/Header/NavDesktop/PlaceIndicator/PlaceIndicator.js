import { useRouter } from "next/router";

import css from "./PlaceIndicator.module.scss";

const PlaceIndicator = () => {
  const { pathname } = useRouter();

  let noRoot = pathname.replace("/", "");
  let indicator = "";

  if (noRoot.length == 0) {
    indicator = "Home";
  } else {
    indicator = noRoot.replace(/[^a-zA-Z0-9 ]/g, " > ");
  }

  return (
    <div className={css.wrapper}>
      <h4>{indicator}</h4>
    </div>
  );
};

export default PlaceIndicator;
