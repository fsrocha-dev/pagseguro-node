const express = require("express");
const bodyParser = require("body-parser");
const pgSeguro = require("./pagseguro");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/payment", async (req, res) => {
  //Dados do comprador
  pgSeguro.sender({
    name: "Frank Souza Rocha",
    email: "contato@frankrocha.net",
    phone: {
      areaCode: "75",
      number: "992141967"
    }
  });

  //Os items da venda, podem ter vários caso haja nescessidade
  pgSeguro.addItem({
    id: "10",
    description: "Payment Test",
    amount: "20.00",
    quantity: 1
  });

  //Informações de Frete e pagamento
  pgSeguro.shipping({
    type: 3,
    name: req.body.name,
    card: req.body.card,
    cvv: req.body.cvv,
    date: req.body.date,
    address: {
      street: req.body.address.street,
      number: req.body.address.number,
      city: req.body.address.city,
      state: req.body.address.state,
      country: req.body.address.country
    }
  });

  //Alternativa seria da seguinte forma
  //Type 3 quer dizer que não tem frete o tal produto.
  pgSeguro.shipping({
    type: 3
  });

  pgSeguro.checkout((data, response) => {
    if (data) {
      return res.json({ data });
    }
  });
});

app.listen(3000, () =>
  console.log(`Express Rodando... env: ${process.env.NODE_ENV}`)
);
