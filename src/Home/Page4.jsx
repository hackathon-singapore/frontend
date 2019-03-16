import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page4 } from './data';

function getLi(num, d, i) {
  const t = num + 1;
  if (i > t * 4 - 1 || i < num * 4) {
    return null;
  }
  return (
    <Col className="col" span={4} key={i} offset={!(i % 4) ? 1 : 2}>
      <i style={{ backgroundImage: `url(${d})` }} />
    </Col>
  );
}
export default function Page4() {
  const children = [];
  for (let i = 0; i < Math.floor(page4.length / 4); i++) {
    children.push((
      <QueueAnim
        component={Row}
        type="bottom"
        key={i}
      >
        {page4.map(getLi.bind(this, i)).filter(item => item)}
      </QueueAnim>));
  }
  return (
    <div>
      <div style={{cursor: 'pointer'}}>
        <img style={{width: '1500px', height: '630px'}} src="https://i.imgur.com/4bF3HwM.png"></img>
      </div>
    </div>
  );
}
