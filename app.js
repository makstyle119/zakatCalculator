const calculateZakat = () => {
  const income = document.getElementById('income').value;
  if (income > 0) {
    const debt = document.getElementById('debt').value;

    const zakat = (2.5 / 100) * (income - debt);

    const output = document.getElementById('output');
    output.innerHTML = `Your Zakat is: ${zakat}`;
    output.style.display = 'block';
  } else {
    output.style.display = 'none';
  }
};

const getYear = () => {
  let year = document.getElementById('getYear');
  year.innerText = new Date().getFullYear();
};
