export class Table {
  constructor() {
    this.app = document.getElementById("app");
    this.columns = [];
    this.rows = [];
  }

  /**
   * 
   * @param {*} columns : Array of string where each string represents a column name. SHould match with object key
   */
  setColumns(columns) {
    this.columns = columns;
  }

  /**
   * 
   * @param {*} data |  Array of objects. Each object should have keys that match the columns
   */
  setRows(data) {
    this.rows = data;
  }

  /**
   * 
   * @param {*} column add a column to the table by providing the column name.
   */
  addColumn(column) {
    this.columns.push(column);
  }

  /**
   * 
   * @param {*} data add a row to the table by providing the data object. The object should have keys that match the columns
   */
  addRow(data) {
    this.rows.push(data);
  }

  /**
   * Draw the table in the app element
   */
  drawTable() {
    this.app.innerHTML = "";

    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    
    for (let column of this.columns) {
      const th = document.createElement('th');
      th.textContent = column;
      tr.appendChild(th);
    }
    
    thead.appendChild(tr);
    table.appendChild(thead);

    for (let item of this.rows) {
      const tr2 = document.createElement('tr');
      for (let column of this.columns) {
        const td = document.createElement('td');
        td.textContent = item[column] || "N/A";
        tr2.appendChild(td);
      }
      tbody.appendChild(tr2);
    }
    table.appendChild(tbody);
    
    this.app.appendChild(table);
  }
}