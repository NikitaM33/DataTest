import React, { useEffect, useCallback } from 'react';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Home.module.scss';
import 'antd/dist/antd.css';
import { fetchtableData } from '../../redux/actions/home';

const Home = () => {
  const dispatch = useDispatch();
  const { clientData } = useSelector(({ home }) => home);

  const columns = [
    {
      title: 'Номер / Дата',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <>
          <p>{text}</p>
          <span></span>
        </>
      ),
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

  const data = clientData.map((item) => {
    return (
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['Новое'],
      }
    )
  });
  
  // [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['Новое'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['Выполняется'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['Назначено'],
  //   },
  //   {
  //     key: '4',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['Отменено'],
  //   },
  // ];

  useEffect(() => {
    dispatch(fetchtableData());
  }, []);

  return (
    <div className={styles.home}>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Home;
