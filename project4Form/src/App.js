import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [searchValue, setSearchValue] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [invites, setInvites] = React.useState([])
  const [exit, setExit] = React.useState(false)
  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then((json) => {
      setUsers(json.data);
    })
    .catch(err => {
      console.warm(err);
    }).finally(() => setLoading(false))
      
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter((_id) => _id !== id)) //если пользователи совпали оставляем
    } else {
      setInvites((prev) => [ ...prev, id]); //добавляем
    }
  }


  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} exit={exit}/>
      ) : (
        <Users 
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue} 
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
          />
      )}
      
      {/* <Success /> */}
    </div>
  );
}

export default App;
