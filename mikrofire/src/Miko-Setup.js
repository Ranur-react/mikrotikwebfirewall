/* @flow */

import React, { Component } from 'react';

let coba=()=>{
            var MikroNode = require('mikronode-ng');

      var connection = MikroNode.getConnection('192.168.88.1','admin','password');
      connection.closeOnDone = true;

      connection.connect(function(conn) {
        var chan=conn.openChannel();
        chan.closeOnDone = true;
          chan.write(['/ip/address/add','=interface=ether1','=address=192.168.1.1'], function(c) {
             c.on('trap',function(data) {
                console.log('Error setting IP: '+data);
             });
             c.on('done',function(data) {
                console.log('IP Set.');
             });
          });
       });
}

let cuboliak=()=>{
  var MikroNode = require('mikronode-ng');
  var connection = MikroNode.getConnection('192.168.10.1','admin','');
  connection.closeOnDone = true;

connection.connect(function(conn) {
          var chan=conn.openChannel();
          chan.write(['/ip/address/print']);
  })



  console.log(connection);
}
export default class Setup extends Component {
  render() {
    cuboliak();
    return (
      <dev>

            <dev>
                <table align="center" border="0" width="400">
                <tr>
                  <td>Ip Mikrotik</td>
                  <td>
                      <input type="text" placeholder="Masukan IP Mikrotik"></input>
                  </td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>
                      <input type="text" placeholder="username"></input>
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>
                      <input type="text" placeholder="*****"></input>
                  </td>
                </tr>

                <tr align="center">
                  <td colSpan="2"><button >Connect</button></td>
                </tr>

                <tr>
                  <td>
                  Status:

                  </td>
                </tr>
                </table>
            </dev>

            <dev>
            </dev>
      </dev>

    );
  }
}
