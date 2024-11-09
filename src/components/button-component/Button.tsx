import React from "react";
import {
  BUTTON_SIZES,
  BUTTON_STATES,
  BUTTON_VARIANTS,
  ICONS,
} from "../../lib/constants";

interface Props {
  variant?: string;
  btnState?: string;
  size?: string;
  tabIndex?: number;
  icons?: string;
  children: React.ReactNode
}

const Button = (props: Props) => {
  React.useEffect(() => {
    setVariant(props.variant ?? BUTTON_VARIANTS.SECONDARY);
    setBtnState(props.btnState ?? BUTTON_STATES.NORMAL);
    setSize(props.size ?? BUTTON_SIZES.MEDIUM);
    setIcons(props.icons ?? ICONS.NONE);
    setTabIndex(props.tabIndex ?? 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [btnState, setBtnState] = React.useState<string | undefined>('');
  const [variant, setVariant] = React.useState<string | undefined>('');
  const [size, setSize] = React.useState<string | undefined>('');
  const [icons, setIcons] = React.useState<string | undefined>('');
  const [tabIndex, setTabIndex] = React.useState<number | undefined>(undefined);
  const [isFocused, setIsFocused] = React.useState<boolean | undefined>(false);

  const handleOnFocus = (e: React.FocusEvent) => {
    console.log(e);
    setIsFocused(!!e.target);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnMouseEnter = () => {
    if (btnState === BUTTON_STATES.NORMAL) {
      setBtnState(BUTTON_STATES.HOVER);
    }
  };

  const handleOnMouseLeave = () => {
    if (btnState === BUTTON_STATES.FOCUS)
      return

    setBtnState(BUTTON_STATES.NORMAL);
  };

  const handleOnClick = () => {
    if (btnState === BUTTON_STATES.FOCUS) {
      setBtnState(BUTTON_STATES.NORMAL);
      return
    }

    if (btnState !== BUTTON_STATES.DISABLED) {
      setBtnState(BUTTON_STATES.FOCUS);
    }
  };

  return (
    <div className="container">
      <button
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        tabIndex={tabIndex}
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className={`base-btn btn-state-${btnState} btn-variant-${variant} btn-${size} btn-icon-${icons} ${isFocused ? 'btn-state-focus' : ''}`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
