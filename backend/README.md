# Dokumentasi API

### Routes

<table>
  <tr>
    <th colspan="5">Auth Routes</th>
  </tr>
  <tr>
    <th>Route</th>
    <th>HTTP</th>
    <th>Header(s)</th>
    <th>Body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/auth/register</td>
    <td>POST</td>
    <td>none</td>
    <td>name, email, password</td>
    <td>message, token</td>
  </tr>
  <tr>
    <td>/api/auth/login</td>
    <td>POST</td>
    <td>none</td>
    <td>email, password</td>
    <td>message, token</td>
  </tr>

<table>
  <tr>
    <th colspan="5">User Routes</th>
  </tr>
  <tr>
    <th>Route</th>
    <th>HTTP</th>
    <th>Header(s)</th>
    <th>Body</th>
    <th>Response</th>
  <tr>
    <td>/api/user/:id</td>
    <td>GET</td>
    <td>Authorization</td>
    <td>none</td>
    <td>
    message, status, <br>user: { name, email, avatar }
    </td>
  </tr>
  <tr>
    <td>/api/user/:id/activity</td>
    <td>GET</td>
    <td>Authorization</td>
    <td>name, email, password</td>
    <td>message, status,<br> activities: [Number]</td>
  </tr>
  <tr>
    <td>/api/user/:id/activity</td>
    <td>PUT</td>
    <td>Authorization</td>
    <td>timestamp</td>
    <td>message, status</td>
  <tr>
    <td>/api/user/:id</td>
    <td>PUT</td>
    <td>Authorization</td>
    <td>changes: { name }</td>
    <td>message, status</td>
  </tr>
  <tr>
    <td>/api/user/:id/avatar</td>
    <td>PUT</td>
    <td>Authorization</td>
    <td>avatarBuffer</td>
    <td>message, status</td>
  </tr>
  <tr>
    <td>/api/user/:id/password</td>
    <td>PUT</td>
    <td>Authorization</td>
    <td>oldPassword, newPassword</td>
    <td>message, status</td>
</table>

<table>
  <tr>
    <th colspan="5">Todo Routes</th>
  </tr>
  <tr>
    <th>Route</th>
    <th>HTTP</th>
    <th>Header(s)</th>
    <th>Body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/todo/:id</td>
    <td>GET</td>
    <td>Authorization</td>
    <td>none</td>
    <td>message, status, <br>todos: [{ todoId, title, isCompleted, createdAt }]</td>
  </tr>
  <tr>
    <td>/api/todo/:id</td>
    <td>POST</td>
    <td>Authorization</td>
    <td>title</td>
    <td>message, status, todoId</td>
  </tr>
  <tr>
    <td>/api/todo/:id</td>
    <td>PUT</td>
    <td>Authorization</td>
    <td>todoId, <br>changes: { title?, isCompleted? }</td>
    <td>message, status</td>
  </tr>
  <tr>
    <td>/api/todo/:id</td>
    <td>DELETE</td>
    <td>Authorization</td>
    <td>todoId</td>
    <td>message, status</td>
  </tr>
</table>

<!-- schedule table -->
<table>
  <tr>
    <th colspan="5">Schedule Routes</th>
  </tr>
  <tr>
    <th>Route</th>
    <th>HTTP</th>
    <th>Header(s)</th>
    <th>Body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/schedule/:id</td>
    <td>GET</td>
    <td>Authorization</td>
    <td>none</td>
    <td>message, status, <br>schedules: [{ scheduleId, course, mentor, duration, date }]</td>
  </tr>
  <tr>
    <td>/api/schedule/:id</td>
    <td>POST</td>
    <td>Authorization</td>
    <td>course, mentor, duration, date</td>
    <td>message, status, scheduleId</td>
  </tr>
  <tr>
    <td>/api/schedule/:id</td>
    <td>PUT</td>
    <td>Authorization</td>
    <td>scheduleId, <br>changes: { course?, mentor?, duration?, date? }</td>
    <td>message, status</td>
  </tr>
  <tr>
    <td>/api/schedule/:id</td>
    <td>DELETE</td>
    <td>Authorization</td>
    <td>scheduleId</td>
    <td>message, status</td>
</table>
### JWT Payload example

```json
{
  "id": "unique id",
  "email": "example@email.com",
  "todoId": "unique id",
  "scheduleId": "unique id"
}
```
