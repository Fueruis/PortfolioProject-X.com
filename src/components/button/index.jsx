import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, children }) {
  return createElement(
    'button',
    {
      className: classNames("bg-white text-black rounded-full font-bold hover:bg-[#d7dbdc] transition-colors text-xl",{
        "h-12 w-[90%] mt-4": size === 'medium',
      }),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};


/*
Button.defaultProps = {
  size: 'medium',
};
*/