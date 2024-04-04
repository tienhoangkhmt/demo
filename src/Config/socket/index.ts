import { io } from 'socket.io-client';
import { getLocal } from '../../Utils';

export const URL = 'http://172.16.86.225:3000';
const participantType = 'SUPERVISOR';
const chanels = [ 'FB_MESSAGE', 'ZL_MESSAGE', 'VOICE', 'LIVE_CHAT' ];
// query 
export const query = `participantType=${participantType}&participantId=${10133}&tenantId=${4}&channels=${chanels.join()}&fullName=tiendc&applicationId=${''}&forceNew=false';`
const token = getLocal("persist:auth");
console.log("token", token);

const socket = io(URL, {
  autoConnect: false,
  path: '/socket-server',
  auth: {
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTMzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InRpZW5kYyIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiV0VINk9LNTVTWk5VNDJWM1ZUM1BHVUVJQzRVNEZYTlkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiBmdWxsIHF1eeG7gW4iLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiI0Iiwic3ViIjoiMTAxMzMiLCJqdGkiOiJjNjE3ZDdhZC1kN2UyLTQwNjEtYTc2OS1kZWE3M2RmNjVlMjYiLCJpYXQiOjE3MTIyMTk2NjcsIm5iZiI6MTcxMjIxOTY2NywiZXhwIjoxNzEyMzA2MDY3LCJpc3MiOiJBZG1pbiIsImF1ZCI6IkFkbWluIn0.-KjM6KTE1lVZnIPqHPjluXoa0X0Fzt8afgZUk7yiOKo"
  },
  query: {
    "participantType" : participantType,
    "participantId" : "10133",
    "tenantId" : "4",
    "channels" : chanels.join(","),
    "fullName" : "tiendoan",
  },
  transports: ["websocket"]
});
socket.on("connect", () => {
  console.log("connected to server");
})

socket.on("disconnect", () => {
  console.log("disconnect to server");
})

export default socket;
