const array = [
  {
    code: "200000091",
    name: "SKY PUTRA PANCASURYA CILEGON",
  },
];

const result = array.map((item) => {
  return {
    ...item,
    customer: `${item.code} - ${item.name}`,
  };
});

console.log(result);
