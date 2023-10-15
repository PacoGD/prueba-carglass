import { useState, useEffect } from "react";

const AsyncParagraph = (props) => {
  const { dataVersion, loadData } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData()
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, [dataVersion, loadData]);

  return <p>{data || "Loading..."}</p>;
};

export default AsyncParagraph;
