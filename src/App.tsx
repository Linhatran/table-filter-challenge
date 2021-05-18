import { Col, Input, Row, Table } from 'antd';
import React, { useEffect, useState, useCallback } from 'react';

import { getPeopleList, Person } from './api';
import columns from './columns';

import './App.css';

/* TODO: Implement debouncer */
let timer: ReturnType<typeof setTimeout>;
function debounce(func: () => void, wait: number) {
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func(), wait);
  };
}

function App() {
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copy, setCopy] = useState<Person[]>([]);
  const [input, setInput] = useState('');
  const filter = useCallback(() => {
    /* TODO: Implement search filter */
    setData((prev) =>
      copy.filter((person) => {
        return (
          person.firstname.toLowerCase().includes(input.toLowerCase()) ||
          person.lastname.toLowerCase().includes(input.toLowerCase()) ||
          person.age.toString().includes(input) ||
          person.address.toLowerCase().includes(input.toLowerCase())
        );
      })
    );
  }, [input, copy]);

  const debouncedFilter = useCallback(() => {
    debounce(filter, 1000)();
  }, [filter]);

  const fetchPeople = useCallback(() => {
    setIsLoading(true);
    getPeopleList()
      .then((response) => {
        setData(response);
        setIsLoading(false);
        setCopy(response);
      })
      .catch((e) => console.error(e));
  }, []);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  useEffect(() => {
    // filter();
    debouncedFilter();
  }, [input, debouncedFilter]);
  return (
    <div className="App">
      <h1>People</h1>
      <Row className="Row">
        <Col>
          <Input
            allowClear
            placeholder="search people"
            onChange={handleInput}
          />
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
