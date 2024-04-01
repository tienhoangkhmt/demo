import { Empty, Table } from 'antd';
import React, { useEffect, useReducer } from 'react';
import { ArgumentsFn, IPropsTable } from './type/table.type';
import { callApi } from '../../../Api';
import AlertMessage from '../../../Utils/alert';
import { typeMessage } from '../../../Types/common/common.type';
import { initialValuesTable, tableReducer } from './helper/table.helper';
import { NO_DATA } from '../../../Constants/name.constatnts';
import { ACTION_REDUCER_TYPE } from './constants/table.constants';


const TableAntd = (props: IPropsTable): React.JSX.Element => {
    const { propsTable, onFetch, url, bordered = true } = props;
    const [state, dispatch] = useReducer(tableReducer, initialValuesTable);
    
    const fetchData = async ({ page = 0, pageSize = 10 }: ArgumentsFn) => {
        const pr = {
            ...state.params,
            page,
            pageSize
        }
    
        dispatch({ type: ACTION_REDUCER_TYPE.GET_DATA, payload: {
            params: pr,
            isLoading: true,
        }})

        try {
            const res = await callApi({url, params: pr });
            console.log('log', res);
            
            if(onFetch) {
                // setDataSource(onFetch(res.data));
            }else {
                // setDataSource([]);
            }
        } catch (error) {
            console.log("error", error)
            AlertMessage('error', typeMessage.error)
    
        }

    }

    useEffect(() => {
        fetchData({});
    }, [])

    const onChangePagination = (page: number, pageSize:number) => {
       fetchData({page, pageSize})
    }

    const showTotal = (total: number, range: [number, number]):React.ReactNode => {

        return `Tổng ${total} từ ${range[0]} đến ${range[0]}`;
    }

    const locale = {
        emptyText: <Empty description={NO_DATA} image={Empty.PRESENTED_IMAGE_SIMPLE} />,
    };

    return (
        <Table 
            {...propsTable} 
            locale={locale} 
            dataSource={state.dataSource} 
            columns={[]} 
            bordered={bordered}
            pagination={{
                showTotal,
                onChange: onChangePagination,
            }} 
            loading={state.isLoading}
        />
    )
}

export default TableAntd;
