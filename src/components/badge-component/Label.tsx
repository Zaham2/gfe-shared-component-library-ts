import React from "react";
import { LABEL_COLORS, LABEL_SIZES } from "../../lib/contants";

interface Props {
    size?: string;
    color?: string;
    children: React.ReactNode;
}

const Label = ({ size, color, children }: Props) => {
    const [labelSize, setLabelSize] = React.useState<string | undefined>(LABEL_SIZES.SMALL);
    const [labelColor, setLabelColor] = React.useState<string | undefined>(LABEL_COLORS.RED);

    React.useEffect(() => {
        setLabelSize(size);
        setLabelColor(color);
    }, []);

    return (
        <span className={`label ${labelSize} ${labelColor}`}>
            <p className="label-text">{children}</p>
        </span>
    );
};

export default Label;
