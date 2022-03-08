import { useState } from "react";
import MenuItem from "../Menu-Item/Menu-Item";
import "./Directory.styles.scss";
import { collections } from "../../data/directory.data";

const Directory = () => {
  const [sections, setSections] = useState(collections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...menuItemProps }) => (
        <MenuItem key={id} {...menuItemProps} />
      ))}
    </div>
  );
};

export default Directory;
