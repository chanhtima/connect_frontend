

const formatDataTH = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("th-US", options);
};

export default formatDataTH;