function getCashflowInfo() {
  let cashflowArray = [];
  const cashflowTableBody = document.querySelector(".table-cashflow tbody");
  document.querySelector(".button-add").addEventListener("click", function (e) {
    e.preventDefault();
    // CASE 1: LOCAL STORAGE === null
    if (localStorage.getItem("cashflow") === null) {
      // 0. GET VALUE FOR cashflowDate and cashflowMoney
      const cashflowDate = document.querySelector(".input-date").value;
      const cashflowMoney = document.querySelector(".input-money").value;
      if (cashflowDate && cashflowMoney) {
        // 1. CREATE OBJECT OF cashflowObject;
        const cashflowObject = { date: cashflowDate, money: cashflowMoney };
        // 2. ADD cashflowObject to cashflowArray
        cashflowArray.push(cashflowObject);
        // 3. save cashflowArray to localstorage as "cashflow"
        localStorage.setItem("cashflow", JSON.stringify(cashflowArray));
        // CREATE NEW ROW
        const newCashflowRow = document.createElement("tr");
        newCashflowRow.classList.add("new-tr");
        // CREATE AND ADD DATE CELL TO ROW
        const dateCell = document.createElement("td");
        dateCell.textContent = cashflowDate;
        newCashflowRow.appendChild(dateCell);
        // CREATE AND ADD money CELL TO ROW
        const moneyCell = document.createElement("td");
        moneyCell.textContent = cashflowMoney;
        newCashflowRow.append(moneyCell);
        // ADD newCashflowRow to cashflowTableBody
        cashflowTableBody.appendChild(newCashflowRow);
      } else {
        alert("please input date and money");
      }
    } else {
      cashflowArray = JSON.parse(localStorage.getItem("cashflow"));
      const cashflowDate = document.querySelector(".input-date").value;
      const cashflowMoney = document.querySelector(".input-money").value;
      if (cashflowDate && cashflowMoney) {
        const cashflowObject = { date: cashflowDate, money: cashflowMoney };
        cashflowArray.push(cashflowObject);
        localStorage.setItem("cashflow", JSON.stringify(cashflowArray));
        // CREATE NEW ROW
        const newCashflowRow = document.createElement("tr");
        newCashflowRow.classList.add("new-tr");

        // CREATE AND ADD DATE CELL TO ROW
        const dateCell = document.createElement("td");
        dateCell.textContent = cashflowDate;
        newCashflowRow.appendChild(dateCell);

        // CREATE AND ADD money CELL TO ROW
        const moneyCell = document.createElement("td");
        moneyCell.textContent = cashflowMoney;
        newCashflowRow.append(moneyCell);

        // ADD newCashflowRow to cashflowTableBody
        cashflowTableBody.appendChild(newCashflowRow);
      }
    }
  });
}

function clearCashflowTable() {
  document
    .querySelector(".table-cashflow-remove-button")
    .addEventListener("click", () => {
      localStorage.removeItem("cashflow");
      document.querySelectorAll("tr.new-tr").forEach((tr) => tr.remove());
    });
}
function computeIRR(
  cashFlows,
  guess = 0.1,
  maxIterations = 100,
  precision = 1e-6
) {
  let rate = guess; // Initial guess for IRR

  // Convert dates to time differences in years
  const startDate = new Date(cashFlows[0].date);
  let times = cashFlows.map((entry) => {
    let timeDiff =
      (new Date(entry.date) - startDate) / (1000 * 60 * 60 * 24 * 365); // Convert ms → years
    return timeDiff;
  });

  for (let i = 0; i < maxIterations; i++) {
    let npv = 0;
    let derivative = 0;

    for (let t = 0; t < cashFlows.length; t++) {
      let money = parseFloat(cashFlows[t].money); // Extract money correctly
      let time = times[t]; // Use actual time difference
      npv += money / Math.pow(1 + rate, time);
      derivative += (-time * money) / Math.pow(1 + rate, time + 1);
    }

    if (Math.abs(npv) < precision) {
      return rate * 100; // Convert to percentage
    }

    let newRate = rate - npv / derivative;

    // Check if the new rate is a valid number
    if (isNaN(newRate) || !isFinite(newRate)) {
      return null; // No convergence
    }

    rate = newRate;
  }

  return null; // No solution found within maxIterations
}

function triggerMWRRcalculation() {
  // RETRIEVE DATA FROM LOCALSTORAGE

  const amountFromLocalStorage =
    JSON.parse(localStorage.getItem("cashflow")) || [];
  const cashFlows = amountFromLocalStorage.map((each) => each.money);
  // CLICK ON BUTTON TO IMPLEMENT CALCULATING
  document.querySelector(".mwrr").addEventListener("click", () => {
    // REMOVE ALL PREVIOUS RESULT IF AVAILABLE FIRST
    if (document.querySelectorAll(".box-calculate-render p")) {
      document
        .querySelectorAll(".box-calculate-render p")
        .forEach((p) => p.remove());
    }

    // CALL THE CALCULATION FUNCTION AND GET THE RESULT
    const mwrr = computeIRR(cashFlows);

    if (mwrr !== null && mwrr !== undefined) {
      // RENDER THE RESULT
      const calculateedResultName = document.createElement("p");
      calculateedResultName.classList.add("box-calculate-result-name");
      calculateedResultName.textContent = "MWRR";
      const calculateedResultNumber = document.createElement("p");
      calculateedResultNumber.classList.add("box-calculate-result-number");
      calculateedResultNumber.textContent = `${mwrr.toFixed(2)}%`;
      document
        .querySelector(".box-calculate-render")
        .appendChild(calculateedResultName);
      document
        .querySelector(".box-calculate-render")
        .appendChild(calculateedResultNumber);
    }
  });
}

function clearCalculateResult() {
  // CHECK IF ANY RESULT RENDERED OR NOT
  if (document.querySelectorAll(".box-calculate-render p")) {
    // CLICK ON THE CLEAR BUTTON
    document
      .querySelector(".box-calculate-clear-button")
      .addEventListener("click", () => {
        // REMOVE ALL THE RENDERED RESULT
        document
          .querySelectorAll(".box-calculate-render p")
          .forEach((p) => p.remove());
      });
  }
}

export default function investmentFunction() {
  document.addEventListener("DOMContentLoaded", function () {
    const cashflowTableBody = document.querySelector(".table-cashflow tbody");
    if (!(localStorage.getItem("cashflow") === null)) {
      const cashflowArray = JSON.parse(localStorage.getItem("cashflow"));
      for (const dateMoneyPair of cashflowArray) {
        // CREATE NEW ROW
        const newCashflowRow = document.createElement("tr");
        newCashflowRow.classList.add("new-tr");
        // CREATE AND ADD DATE CELL TO ROW
        const dateCell = document.createElement("td");
        dateCell.textContent = dateMoneyPair.date;
        newCashflowRow.appendChild(dateCell);
        // CREATE AND ADD money CELL TO ROW
        const moneyCell = document.createElement("td");
        moneyCell.textContent = dateMoneyPair.money;
        newCashflowRow.append(moneyCell);
        // ADD newCashflowRow to cashflowTableBody
        cashflowTableBody.appendChild(newCashflowRow);
      }
    }
  });
  getCashflowInfo();
  clearCashflowTable();
  triggerMWRRcalculation();
  clearCalculateResult();
}

// // ### **Code JavaScript:**
// // ```javascript

// const a = JSON.parse(localStorage.getItem("cashflow")).map(
//   (each) => each.money
// );
// may cause an error if localStorage.getItem("cashflow") is null
// (meaning there is no saved data in localStorage). In that case, JSON.parse(null)
// returns null, and calling .map() on null will throw an error.

// Danh sách dòng tiền (âm: đầu tư, dương: thu về)

//   function computeIRR(cashFlows, dates, guess = 0.1, maxIterations = 100, precision = 1e-6) {
//     if (cashFlows.length !== dates.length) {
//         console.error("Error: Cash flows and dates must have the same length.");
//         return null;
//     }

//     // Convert dates to time differences (in years)
//     const startDate = new Date(dates[0]);
//     const timePeriods = dates.map(date => (new Date(date) - startDate) / (1000 * 60 * 60 * 24 * 365)); // Convert to years

//     let rate = guess;

//     for (let i = 0; i < maxIterations; i++) {
//         let npv = 0;
//         let derivative = 0;

//         for (let j = 0; j < cashFlows.length; j++) {
//             const t = timePeriods[j];
//             npv += cashFlows[j] / Math.pow(1 + rate, t);
//             derivative += -t * cashFlows[j] / Math.pow(1 + rate, t + 1);
//         }

//         if (Math.abs(npv) < precision) {
//             return rate * 100; // Convert to percentage
//         }

//         rate -= npv / derivative;
//     }

//     return null; // No solution found
// }

// // Example: Now dates are explicitly considered
// const cashFlows = [-10000, -2000, 6000, -1000, 12000];
// const dates = ["2023-01-01", "2023-06-01", "2024-01-01", "2024-06-01", "2025-01-01"];

// console.log(`MWRR: ${computeIRR(cashFlows, dates)?.toFixed(2)}%`);
