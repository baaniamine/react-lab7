function DataLoader({ render }) {
  const data = ['Alice', 'Bob', 'Charlie', 'Dina', 'Yassine'];

  return <div>{render(data)}</div>;
}

export default DataLoader;
