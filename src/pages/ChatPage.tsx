import { useEffect, useRef, useState } from 'react';
import * as StompJs from '@stomp/stompjs';
import SockJsClient from 'react-stomp';
import { useRecoilValue } from 'recoil';
import { authAtom } from 'src/contexts/AuthAtom';
import { Client } from '@stomp/stompjs';

let client: Client | null = null;

const accessToken = JSON.parse(localStorage.getItem('accessToken'));

const ChatPage = () => {
  // const auth = useRecoilValue(authAtom);
  const [content, setContent] = useState('');

  const subscribe = () => {
    if (client != null) {
      // client.subscribe('/from/liar/start/1', (data: any) => {
      //   const newMessage: string = JSON.parse(data.body).message as string;
      //   addContent(newMessage);
      // });
    }
  };

  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  console.log(accessToken);

  const connect = () => {
    client = new StompJs.Client({
      brokerURL: 'wss://fd7f-218-146-18-100.jp.ngrok.io/stomp/chat',
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      debug: function (str) {
        console.log(str);
      },
      onConnect: () => {
        subscribe();
      },
      onStompError: function (frame) {
        console.log('Broker reported error: ' + frame.headers['message']);
        console.log('Additional details: ' + frame.body);
      },
      // reconnectDelay: 5000, //자동 재 연결
      // heartbeatIncoming: 4000,
      // heartbeatOutgoing: 4000,
    });

    client.activate();
  };

  const handler = (message: string) => {
    if (client != null) {
      if (!client.connected) return;

      client.publish({
        destination: '/to/liar/start/1',
        body: JSON.stringify({
          message: message,
        }),
      });
    }
  };

  const addContent = (message: string) => {
    setContent(content.concat(message));
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  return <div>채팅 왜 안돼?</div>;
};

export default ChatPage;
