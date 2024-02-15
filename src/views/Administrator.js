import React, { useState, useEffect } from "react";
import axios from "axios";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import io from 'socket.io-client';

const socket = io('http://172.20.10.13:8080');

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const [data, setData] = useState([]);
  const [tableHeader, setTableHeader] = useState([]);
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    socket.on('message', (data) => {
      let data0 = JSON.parse(data);
      console.log(data0);
      setData(data0);
      data0[0] ? setTableHeader(Object.keys(data0[0])) : null;
});

    return () => {
      socket.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   axios.get('http://172.20.10.13:8080/data')
  //     .then(response => {
  //       // Traitement de la réponse
  //       setData(response.data);
  //       setTableHeader(Object.keys(data[0]));

  //     })
  //     .catch(error => {
  //       // Gestion des erreurs
  //       console.error(error + "dfsdfsdfsdfsdfsdf");
  //     });
  // };

  return (
    <>
      <Container fluid>
        <Row>
          {/* <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Utilisateurs enrollé</Card.Title>
                <p className="card-category">
                  Voici les utilisateurs dont on connait l'emprunte
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      {tableHeader && tableHeader.map((item, index) => (
                        <th key={index}>{item}</th>
                      ))}
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data && data.map((row) => (
                   <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.idClient}</td>
                      <td>{row.heure}</td>
                    <td>
                      <span className="mr-3">
                        <Button>modifier</Button>
                      </span>
                      <span>
                        <Button variant="danger">supprimerr</Button>
                      </span>
                    </td>
                   </tr>
                  ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Historique de connexion</Card.Title>
                <p className="card-category">
                  Journal de tentatives d'ouverture de la porte 
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                <thead>
                    <tr>
                      {tableHeader && tableHeader.map((item, index) => (
                        <th key={index}>{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                  {data && data.map((row) => (
                   <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.idClient}</td>
                      <td>{row.date}</td>
                      <td>{row.heure}</td>
                   </tr>
                  ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://172.20.10.13:8080');

// function TableList() {
//   const [message, setMessage] = useState('');
//   const [receivedMessage, setReceivedMessage] = useState('');

//   useEffect(() => {
//     socket.on('message', (data) => {
//       console.log(data);
//       let data0 = JSON.parse(data);
//       setReceivedMessage(data0.data);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     socket.emit('message', message);
//     setMessage('');
//   };

//   return (
//     <div>
//       <h1>Notification en temps réel</h1>
//       <div>
//         <label htmlFor="message">Message :</label>
//         <input
//           type="text"
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Envoyer</button>
//       </div>
//       {receivedMessage && (
//         <div>
//           <h2>Message reçu :</h2>
//           <p>{receivedMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TableList;
