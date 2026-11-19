import type { ReadingStatus } from "../../types/BookType";

const FilterButtons = ({
  filter,
  setFilter,
}: {
  filter: "all" | ReadingStatus;
  setFilter: (filter: "all" | ReadingStatus) => void;
}) => {
  return (
    <div
      className="filter-buttons"
      role="group"
      aria-label="読書状態で絞り込む"
    >
      <button
        type="button"
        className={`filter-button ${filter === "all" ? "active" : ""}`}
        data-filter="all"
        aria-pressed={filter === "all"}
        onClick={() => setFilter("all")}
      >
        すべて
      </button>
      <button
        type="button"
        className={`filter-button ${filter === "unread" ? "active" : ""}`}
        data-filter="unread"
        aria-pressed={filter === "unread"}
        onClick={() => setFilter("unread")}
      >
        未読
      </button>
      <button
        type="button"
        className={`filter-button ${filter === "reading" ? "active" : ""}`}
        data-filter="reading"
        aria-pressed={filter === "reading"}
        onClick={() => setFilter("reading")}
      >
        読書中
      </button>
      <button
        type="button"
        className={`filter-button ${filter === "completed" ? "active" : ""}`}
        data-filter="completed"
        aria-pressed={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        読了
      </button>
    </div>
  );
};

export default FilterButtons;
