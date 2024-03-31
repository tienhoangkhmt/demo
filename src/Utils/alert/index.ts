import { message } from 'antd';
import { typeMessage } from '../../Types/common/common.type';

const AlertMessage = (text: string|React.ReactNode = 'success', type: typeMessage = typeMessage.success) => {
  message[type](text);
}

export default AlertMessage;