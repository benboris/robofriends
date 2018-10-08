import React, { Component } from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
  const cardComponent = robots.map(robot => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  ));
  return <div>{cardComponent}</div>;
};

export default CardList;
