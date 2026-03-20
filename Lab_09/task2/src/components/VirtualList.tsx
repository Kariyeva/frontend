import { useState, type CSSProperties, type ChangeEvent } from "react";
import { FixedSizeList as List } from "react-window";

export function VirtualList() {
  const [filter, setFilter] = useState("");

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: CSSProperties;
  }) => <div style={style}>{filteredItems[index]}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />

      <p>
        Showing {filteredItems.length} of {items.length} items
      </p>

      <List
        height={400}
        width={400}
        itemCount={filteredItems.length}
        itemSize={35}
      >
        {Row}
      </List>
    </div>
  );
}