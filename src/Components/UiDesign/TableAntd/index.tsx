import { Empty, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { IPropsTable } from './type/table.type';
import { callApi } from '../../../Api';
import AlertMessage from '../../../Utils/alert';
import { typeMessage } from '../../../Types/common/common.type';

const TableAntd = (props: IPropsTable): React.JSX.Element => {
    const { propsTable, onFetch, url } = props;
    const [dataSource, setDataSource] = useState<Array<object> | undefined>([]);
    const [params] = useState<object | undefined>({})
    // const [isLoading, setIsLoadding] = useState<boolean>(false);

    const fetchData = async () => {

        try {
            const res = await callApi({url, params });
            if(onFetch) {
                setDataSource(onFetch(res.data));
            }else {
                setDataSource([]);
            }
        } catch (error) {
            console.log("error", error)
            AlertMessage('error', typeMessage.error)
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    // const onChangePagination = (page, pageSize) => {

    // }

    const locale = {
        emptyText: <Empty description="khong co du lieu" image={<img src='../../../assets/react.svg' />} />,
      };

    return <Table {...propsTable} locale={locale} dataSource={dataSource} columns={[]} bordered  />
}

export default TableAntd;

