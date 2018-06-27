import React from 'react';
import { Link } from 'react-router';
import { Button, Table } from 'react-bootstrap';

class Test extends React.Component {
  render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>7月</th>
              <th>20日</th>
              <th>21日</th>
              <th>22日</th>
              <th>23日</th>
              <th>24日</th>
              <th>25日</th>
              <th>26日</th>
              <th>27日</th>
              <th>28日</th>
              <th>29日</th>
              <th>30日</th>
              <th>31日</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <td></td>
            </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
        </Table>
      </div>
    );
  }
}

export default Test;
