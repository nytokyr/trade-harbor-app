import React from "react";
import MostActiveBoard from "./components/MostActiveBoard";
import { useUserContext } from "./context/UserContext";

const HomePage = () => {
  const { userName } = useUserContext();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome Username</h1>
          <p>Your one-stop trading platform</p>
          <p>
            Access real-time market data, make trades, and manage your
            portfolio.
          </p>

          {/*BEGIN : this part should be a new component => Portfolio.js */}
          <div class="container mt-5">
            <h2>Portfolio</h2>
            <p>Current Funds: $ 100.0</p>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Quantity</th>
                  <th>Average Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TSLA</td>
                  <td>XXX</td>
                  <td>$XXXX</td>
                </tr>
                <tr>
                  <td>AAPL</td>
                  <td>XXX</td>
                  <td>$XXXXXX</td>
                </tr>
                <tr>
                  <td>AMZN</td>
                  <td>XXX</td>
                  <td>$XXXXXX</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*END : this part should be a new component => Portfolio.js*/}
        </div>
        <div className="col-md-6">
          <MostActiveBoard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
