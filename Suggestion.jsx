export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {Array.isArray(data) && data.length > 0
        ? data.map((item, index) => (
            <li
              onClick={() => handleClick({ target: { innerText: item } })}
              key={index}
              className="suggestion-item" // This will apply the cursor: pointer and other styles
            >
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
