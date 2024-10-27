import { MdKeyboardArrowDown } from "react-icons/md";
const ThemeToggle = () => {
  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="tooltip"
        data-tip="Choose Themes"
      >
        <button className="btn btn-sm">
          Themes <MdKeyboardArrowDown className="text-xl" />
        </button>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content right-0 bg-base-300 rounded-box z-10 p-2 mt-2 shadow-2xl  overflow-y-auto"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            value="default"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Forest"
            value="forest"
          />
        </li>
        
      </ul>
    </div>
  );
};

export default ThemeToggle;
