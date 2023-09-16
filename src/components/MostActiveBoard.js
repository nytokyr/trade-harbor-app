import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMostActiveByShareVolume } from "../api/tradeHarborApi";

const MostActiveBoard = () => {
  const navigate = useNavigate();
  const [mostActiveByShareVolume, setMostActiveByShareVolume] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredActions, setFilteredActions] = useState([]);

  // Handle the search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;

    // Filter actions based on the search term
  };

  // Handle row click and navigate to details page
  const handleRowClick = (action) => {
    navigate(`/details/${action.symbol}`);
  };

  return (
    <div>
      <h2>Most Active Share Volume</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by symbol or name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <p>XXXX found</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Last sale price</th>
            <th>Last sale change</th>
            <th>Share volume</th>
          </tr>
        </thead>
        <tbody>
          {mostActiveByShareVolume.map((action, index) => (
            <tr key={index} style={{ cursor: "pointer" }}>
              <td>{action.symbol}</td>
              <td>{action.name}</td>
              <td>{action.lastSalePrice}</td>
              <td>{action.lastSaleChange}</td>
              <td>{new Intl.NumberFormat("en-US").format(action.change)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostActiveBoard;
