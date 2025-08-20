import { useEffect } from "react";
import { Section1, Section2, Section3 } from "../../components/Kart";
import { useDispatch } from "react-redux";
import { mainActions } from "../../store/modules/main/mainSlice";
import { headerActions } from "../../store/modules/common/headerSlice";

const Kart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      // const scrollY = window.scrollY;
      // if (scrollY > 500) {
      //     dispatch(mainActions.scollMove(scrollY));
      //     dispatch(headerActions.scollOpacity(true));
      // } else {
      //     dispatch(mainActions.disableLogo());
      //     dispatch(headerActions.scollOpacity(false));
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Kart;
