import React, { useEffect, useState, useCallback } from "react";
import { Col, Input, Row, Table } from "antd";
import "./App.css";

import columns from "./columns";
import { getPeopleList, Person } from "./api";

/* TODO: Implement debouncer */
function debounce(func: () => void, wait: number, immediate = true) {
}

function App() {
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /* TODO: Implement search filter */

  const fetchPeople = useCallback(() => {
    setIsLoading(true);
    getPeopleList()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  return (
    <div className="App">
      <h1>People</h1>
      <Row className="Row">
        <Col>
          <Input allowClear placeholder="search people" />
        </Col>
      </Row>
      <Table
        bordered={true}
        columns={columns}
        dataSource={data}
        loading={isLoading}
      />
    </div>
  );
}


export default App;
