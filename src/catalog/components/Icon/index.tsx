import React from "react";
import './styles.scss';

type Props = { icon: string };

export const Icon: React.FC<Props> = ({ icon }) => {
  return <span className={`logo logo-${icon}`} />;
}

export { Icon as default };
