$("#get-balance-btn").on("click", function (e) {
  if ($("#get-balance-btn").text() == "Get Balance") {
    Spinner();
    Spinner.show();
    $.ajax({
      url: "/api/balance/",
      type: "GET",
      headers: {
        "X-CSRFToken": "{{ csrf_token }}",
      },
    }).done(function (data) {
      $("#get-balance-data").slideUp(function () {
        if (data.error != null) {
          displayError(this, data.error);
          return;
        }
        var balanceData = data.balance;
        var html =
          "<tr><td><strong>Name</strong></td><td><strong>Balance</strong></td><td><strong>Type</strong></td><td><strong>Mask</strong></td></tr>";
        balanceData.accounts.forEach(function (account, idx) {
          html += "<tr>";
          html += "<td>" + account.name + "</td>";
          html +=
            "<td>$" +
            (account.balances.available != null
              ? account.balances.available
              : account.balances.current) +
            "</td>";
          html += "<td>" + account.type + "</td>";
          html += "<td>" + account.mask + "</td>";
          html += "</tr>";
        });

        $(this).html(html).slideDown();
        $("#get-balance-btn").html("Hide");
        Spinner.hide();
      });
    });
  } else {
    $("#get-balance-btn").html("Get Balance");
    $("#get-balance-data").hide();
  }
});

$("#get-transactions-btn").on("click", function (e) {
  if ($("#get-transactions-btn").text() == "Get Transactions") {
    Spinner();
    Spinner.show();
    $.ajax({
      url: "/api/get_transactions/",
      type: "GET",
      headers: {
        "X-CSRFToken": "{{ csrf_token }}",
      },
    }).done(function (data) {
      $("#transactions-body").slideUp(function () {
        if (data.error != null) {
          displayError(this, data.error);
          return;
        }
        var balanceData = data.transactions;
        var html =
          "<tr><td><strong>Name</strong></td><td><strong>Amount</strong></td><td><strong>Date</strong></td></tr>";
        balanceData.transactions.forEach(function (transaction, idx) {
          html += "<tr>";
          html += "<td>" + transaction.name + "</td>";
          html += "<td>$" + transaction.amount + "</td>";
          html += "<td>" + transaction.date + "</td>";
          html += "</tr>";
        });

        $(this).html(html).slideDown();
        $("#get-transactions-btn").html("Hide");
        Spinner.hide();
      });
    });
  } else {
    $("#get-transactions-btn").html("Get Transactions");
    $("#transactions-body").hide();
  }
});

$("#get-item-btn").on("click", function (e) {
  if ($("#get-item-btn").text() == "Get Item Info") {
    Spinner();
    Spinner.show();
    $.ajax({
      url: "/api/item/",
      type: "GET",
      headers: {
        "X-CSRFToken": "{{ csrf_token }}",
      },
    }).done(function (data) {
      $("#get-item-data").slideUp(function () {
        if (data.error) {
          displayError(this, data.error);
        } else {
          var html = "";
          html +=
            "<tr><td>Institution name</td><td>" +
            data.institution.name +
            "</td></tr>";
          html +=
            "<tr><td>Billed products</td><td>" +
            data.item.billed_products.join(", ") +
            "</td></tr>";
          html +=
            "<tr><td>Available products</td><td>" +
            data.item.available_products.join(", ") +
            "</td></tr>";

          $(this).html(html).slideDown();
          $("#get-item-btn").html("Hide");
          Spinner.hide();
        }
      });
    });
  } else {
    $("#get-item-btn").html("Get Item Info");
    $("#get-item-data").hide();
  }
});

$("#get-accounts-btn").on("click", function (e) {
  if ($("#get-accounts-btn").text() == "Get Account Info") {
    Spinner();
    Spinner.show();
    $.ajax({
      url: "/api/accounts/",
      type: "GET",
      headers: {
        "X-CSRFToken": "{{ csrf_token }}",
      },
    }).done(function (data) {
      $("#get-accounts-data").slideUp(function () {
        if (data.error != null) {
          displayError(this, data.error);
          return;
        }
        var accountData = data.accounts;
        var html =
          "<tr><td><strong>Name</strong></td><td><strong>Balances</strong></td><td><strong>Type</strong></td><td><strong>Subtype</strong></td><td><strong>Mask</strong></td></tr>";
        accountData.accounts.forEach(function (account, idx) {
          html += "<tr>";
          html += "<td>" + account.name + "</td>";
          html +=
            "<td>$" +
            (account.balances.available != null
              ? account.balances.available
              : account.balances.current) +
            "</td>";
          html += "<td>" + account.type + "</td>";
          html += "<td>" + account.subtype + "</td>";
          html += "<td>" + account.mask + "</td>";
          html += "</tr>";
        });

        $(this).html(html).slideDown();
        $("#get-accounts-btn").html("Hide");
        Spinner.hide();
      });
    });
  } else {
    $("#get-accounts-btn").html("Get Account Info");
    $("#get-accounts-data").hide();
  }
});
