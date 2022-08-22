import "./ListUsers.css";
import { useState, useEffect } from "react";
import { UsersServices } from "../../services/UsersService";
import User from "../User/User";

function ListUsers({ updateList }) {
  const [users, setUsers] = useState([]);

  const [userSearch, setUserSearch] = useState();

  const searchClick = async () => {
    if (userSearch) {
      const response = await UsersServices.getById(userSearch);
      setUsers([response]);
    } else {
        UsersServices.getlista().then(setUsers);
    }
  };

  useEffect(() => {
    UsersServices.getlista().then(setUsers);
  }, [])

  return (
    <div className="listUsers">
        <div className="pesquisar__user">
            <form
            className="search--task"
            onSubmit={(event) => {
              event.preventDefault();
              searchClick();
            }}
            >
                <input 
                 id="search--user"
                 className="search"
                 type="text"
                 placeholder="Pesquise uma Pessoa"
                 onChange={(event) => setUserSearch(event.target.value)}
                />
                 <button
          id="button-search"
          type="submit"
        ><i className="bi bi-search"></i></button>
            </form>
        </div>
        <div className="todos-usuarios">
           {users.map((user, index) => (
        <User key={`user--${index}`} user={user} />
      ))}
        </div>    
    </div>
  );
}

export default ListUsers;
