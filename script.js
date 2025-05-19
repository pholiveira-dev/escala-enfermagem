// BRADEN
document.getElementById('form-braden').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  let total = 0;
  total += Number(form.sensorial.value);
  total += Number(form.umidade.value);
  total += Number(form.atividade.value);
  total += Number(form.mobilidade.value);
  total += Number(form.nutricao.value);
  total += Number(form.atrito.value);

  let risco = '';
  if (total <= 9) risco = 'Risco muito alto';
  else if (total <= 12) risco = 'Risco alto';
  else if (total <= 14) risco = 'Risco moderado';
  else if (total <= 18) risco = 'Risco leve';
  else risco = 'Sem risco';

  document.getElementById('resultado-braden').innerText = `Total: ${total} pontos - ${risco}`;
});

// MORSE
document.getElementById('form-morse').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  let total = 0;
  total += Number(form.quedas.value);
  total += Number(form.diagnostico.value);
  total += Number(form.apoio.value);
  total += Number(form.iv.value);
  total += Number(form.marcha.value);
  total += Number(form.mental.value);

  let risco = '';
  if (total < 25) risco = 'Risco baixo';
  else if (total <= 50) risco = 'Risco moderado';
  else risco = 'Risco alto';

  document.getElementById('resultado-morse').innerText = `Total: ${total} pontos - ${risco}`;
});
