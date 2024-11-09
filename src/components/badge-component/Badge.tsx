import React from "react";
import { BADGE_COLORS, BADGE_SIZES } from "../../lib/constants";

interface Props {
    size?: string;
    color?: string;
    children: React.ReactNode;
}

const Badge = ({ size, color, children }: Props) => {
    const [badgeSize, setLabelSize] = React.useState<string | undefined>(BADGE_SIZES.SMALL);
    const [badgeColor, setLabelColor] = React.useState<string | undefined>(BADGE_COLORS.RED);

    React.useEffect(() => {
        setLabelSize(size);
        setLabelColor(color);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <span className={`badge badge-${badgeSize} badge-${badgeColor}`}>
            <p className="badge-text">{children}</p>
        </span>
    );
};

export default Badge;
