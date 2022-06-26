import React from 'react';
import { Space, Table, Tag } from 'antd';

import styles from './Home.module.scss';
import 'antd/dist/antd.css';

const Home = () => {
  const columns = [
    {
      title: 'Номер / Дата',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Тип задания / Автор',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Аккаунт / Терминал',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Статус',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        // Цыета статусов
        <>
          {tags.map((tag) => {
            let color;
            // = tag.length > 5
            //   ? 'geekblue'
            //   : 'green';
            switch (tag) {
              case 'Новое':
                color = 'green';
                break;

              case 'Выполняется':
                color = 'geekblue';
                break;

              case 'Назначено':
                color = 'coral';
                break;

              case 'Отменено':
                color = 'magenta';
                break;
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['Новое'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['Выполняется'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['Назначено'],
    },
    {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['Отменено'],
    },
  ];

  return (
    <div className={styles.home}>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Home;
