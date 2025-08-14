'use strict';

// write code here
const field = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if (field.rows.length === 10) {
    appendRow.disabled = true;

    return;
  }

  const firstRow = field.rows[0];
  const cellsCount = firstRow.cells.length;
  const tr = document.createElement('tr');

  for (let i = 0; i < cellsCount; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }

  field.append(tr);
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  if (field.rows.length === 2) {
    removeRow.disabled = true;

    return;
  }

  field.deleteRow(field.rows.length - 1);
  appendRow.disabled = false;
});

appendColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length === 10) {
    appendColumn.disabled = true;

    return;
  }

  for (const row of field.rows) {
    const td = document.createElement('td');

    row.append(td);
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length === 2) {
    removeColumn.disabled = true;

    return;
  }

  for (const row of field.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  appendColumn.disabled = false;
});
