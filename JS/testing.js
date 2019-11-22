// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes
// No editar
const clients = [
  { id: 1, taxNumber: "86620855", name: "HECTOR ACUÑA BOLAÑOS" },
  { id: 2, taxNumber: "7317855K", name: "JESUS RODRIGUEZ ALVAREZ" },
  { id: 3, taxNumber: "73826497", name: "ANDRES NADAL MOLINA" },
  { id: 4, taxNumber: "88587715", name: "SALVADOR ARNEDO MANRIQUEZ" },
  { id: 5, taxNumber: "94020190", name: "VICTOR MANUEL ROJAS LUCAS" },
  { id: 6, taxNumber: "99804238", name: "MOHAMED FERRE SAMPER" }
];
const accounts = [
  { clientId: 6, bankId: 1, balance: 15000 },
  { clientId: 1, bankId: 3, balance: 18000 },
  { clientId: 5, bankId: 3, balance: 135000 },
  { clientId: 2, bankId: 2, balance: 5600 },
  { clientId: 3, bankId: 1, balance: 23000 },
  { clientId: 5, bankId: 2, balance: 15000 },
  { clientId: 3, bankId: 3, balance: 45900 },
  { clientId: 2, bankId: 3, balance: 19000 },
  { clientId: 4, bankId: 3, balance: 51000 },
  { clientId: 5, bankId: 1, balance: 89000 },
  { clientId: 1, bankId: 2, balance: 1600 },
  { clientId: 5, bankId: 3, balance: 37500 },
  { clientId: 6, bankId: 1, balance: 19200 },
  { clientId: 2, bankId: 3, balance: 10000 },
  { clientId: 3, bankId: 2, balance: 5400 },
  { clientId: 3, bankId: 1, balance: 9000 },
  { clientId: 4, bankId: 3, balance: 13500 },
  { clientId: 2, bankId: 1, balance: 38200 },
  { clientId: 5, bankId: 2, balance: 17000 },
  { clientId: 1, bankId: 3, balance: 1000 },
  { clientId: 5, bankId: 2, balance: 600 },
  { clientId: 6, bankId: 1, balance: 16200 },
  { clientId: 2, bankId: 2, balance: 10000 }
];
const banks = [
  { id: 1, name: "SANTANDER" },
  { id: 2, name: "CHILE" },
  { id: 3, name: "ESTADO" }
];

// 0 Arreglo con los ids de clientes
function listClientsIds(clients) {
  return clients.map(client => client.id);
}

// 1 Arreglo con los ids de clientes ordenados por rut
function listClientsIdsSortByTaxNumber(clients) {
  let array= clients.sort((a, b) => a.taxNumber.localeCompare(b.taxNumber))
  return array = Object.values(array)
}

// 2 Arreglo con los nombres de cliente ordenados de mayor a menor por la suma TOTAL de los saldos de cada cliente en los bancos que participa.
function sortClientsTotalBalances(clients, accounts) {
  let totalBankClients = []
  let client = {}
  for (c=0; c<clients.length; c++) {
    let client_exist = 0
    for (a=0; a<accounts.length; a++) {
      if (clients[c].id == accounts[a].clientId) {
        if (client_exist == 0 ) {
          client_exist++
          client = {
            name: clients[c].name,
            total: accounts[a].balance
          }
          totalBankClients.push(client)
        } else {
          sum = totalBankClients[c].total + accounts[a].balance
          totalBankClients[c].total = sum
        }
      }
    }
  }
  let question2= totalBankClients.sort((a,b) => { b.total - a.total})
  return question2
}

// 3 Objeto en que las claves sean los nombres de los bancos y los valores un arreglo con los ruts de sus clientes ordenados alfabeticamente por nombre.
function banksClientsTaxNumbers(banks, accounts, clients) {
  let banksClientsTaxNumbers = {}
  let client = []

  for (b=0; b<banks.length; b++) {
    for (a=0; a<accounts.length; a++) {
      if (banks[b].id == accounts[a].bankId) {
        for (c=0; c<clients.length; c++) {
          if (accounts[a].clientId == clients[c].id) {
            if (banksClientsTaxNumbers[banks[b].name] == null) {
              let newclient = clients[c]
              client.push(newclient)
              banksClientsTaxNumbers[banks[b].name] = client
            } else {
              newclient = clients[c]
              client.push(newclient)
              banksClientsTaxNumbers[banks[b].name] = client
            }
          }
        }
      }
    }
    client = []
  }
  const question3 = Object.assign({}, banksClientsTaxNumbers)
  Object.keys(question3).forEach(key => {
    question3[key].sort((a, b) => a.name.localeCompare(b.name))
  })
  return question3
}

// 4 Arreglo ordenado decrecientemente con los saldos de clientes que tengan más de 25.000 en el Banco SANTANDER
function richClientsBalances(accounts) {
  let balance = []
  for (a=0; a<accounts.length; a++) {
    
    if (accounts[a].bankId == 1) {
      if (accounts[a].balance > 25000) {
        balance.push(accounts[a])
      }
    }
  }

  let question4= balance.sort((a,b) => { a.balance - b.balance})
  return question4
}

// 5 Arreglo con ids de bancos ordenados crecientemente por la cantidad TOTAL de dinero que administran.
function banksRankingByTotalBalance(banks, accounts) {
  let moneyBanks = []
  let bank = {}

  for (b=0; b<banks.length; b++) {
    let bankExists = 0
    for (a=0; a<accounts.length; a++) {
      if (banks[b].id == accounts[a].bankId) {
        if (bankExists == 0) {
          bankExists++
          bank =  {
            id: banks[b].id,
            totalMoney: accounts[a].balance
          }
          moneyBanks.push(bank)
        } else {
          sum = moneyBanks[b].totalMoney + accounts[a].balance
          moneyBanks[b].totalMoney = sum
        }
      }
    }
  }

  let question5= moneyBanks.sort((a,b) => b.totalMoney - a.totalMoney)
  return question5
}

// 6 Objeto en que las claves sean los nombres de los bancos y los valores el número de clientes que solo tengan cuentas en ese banco.
function banksFidelity(banks, accounts) {
  banksFidelity = {}

  for (b=0;b<banks.length;b++) {
    for (a=0;a<accounts.length;a++) {

    }
  }
}

// 7 Objeto en que las claves sean los nombres de los bancos y los valores el id de su cliente con menos dinero.
function banksPoorClients() {
  // CODE HERE
}

// 8 Agregar nuevo cliente con datos ficticios a "clientes" y agregar una cuenta en el BANCO ESTADO con un saldo de 9000 para este nuevo empleado.
// Luego devolver el lugar que ocupa este cliente en el ranking de la pregunta 2.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newClientRanking() {
  // CODE HERE
}

// Impresión de soluciones. No modificar.
console.log("Pregunta 0");
console.log(listClientsIds(clients));
console.log("Pregunta 1");
console.log(listClientsIdsSortByTaxNumber(clients));
console.log("Pregunta 2");
console.log(sortClientsTotalBalances(clients, accounts));
console.log("Pregunta 3");
console.log(banksClientsTaxNumbers(banks, accounts, clients));
console.log("Pregunta 4");
console.log(richClientsBalances(accounts));
console.log("Pregunta 5");
console.log(banksRankingByTotalBalance(banks, accounts));
console.log("Pregunta 6");
console.log(banksFidelity(banks, accounts));
//console.log("Pregunta 7");
//console.log(banksPoorClients());
//console.log("Pregunta 8");
//console.log(newClientRanking());
