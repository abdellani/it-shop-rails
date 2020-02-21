import React from "react";
const VisitsPanel = ({ visits }) => (
  <div>
    <table className="table table-hover">
    <thead>
        <tr>
          <th>Country</th>
          <th>City</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {visits.map((visit, index) => (
          <tr key={index}>
            <td>{visit["country"]}</td>
            <td>{visit["city"]}</td>
            <td>{visit["created_at"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default VisitsPanel;
