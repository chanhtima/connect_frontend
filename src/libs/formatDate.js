// utils.js
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  
  // Retrieve the parts of the date
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  
  // Format the date string without the comma
  return `${month} ${day} ${year}`;
};
