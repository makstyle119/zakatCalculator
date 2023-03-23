const calculateZakat = () => {
  const income = document.getElementById('income').value;
  console.log('🚀 ~ file: app.js:3 ~ calculateZakat ~ income', income);
  const savings = document.getElementById('savings').value;

  const zakat = (2.5 / 100) * (income - savings);

  const output = document.getElementById('output');
  console.log('🚀 ~ file: app.js:8 ~ calculateZakat ~ output', output);
  output.innerHTML = `Your Zakat is: ${zakat}`;
  output.style.display = 'block';
};

// document
//   .getElementById('calculate-btn')
//   .addEventListener('click', calculateZakat());
