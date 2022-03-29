import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/actions";
import { getFilter } from "../../redux/selector";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
