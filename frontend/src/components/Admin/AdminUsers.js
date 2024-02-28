import React, { useContext, useEffect, useState } from 'react';
import CommonSection from '../shared/CommonSection';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { Container, Row, Col } from "reactstrap";
import { AuthContext } from '../../context/AuthContext';

export default function AdminUsers() {
  const { currentuser } = useContext(AuthContext);

  const { data: users, loading, error } = useFetch(`${BASE_URL}/users`);

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (users) {
      // Filter out currentuser from users
      const filtered = users
        .filter((user) => user.email !== "admin@gmail.com")
        .map(({ password, __v, ...rest }) => rest);

      setFilteredUsers(filtered);
    }
  }, [users, currentuser]);

  const deleteUser = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Error: ${res.status} - ${errorData.message}`);
      } else {
        alert("Successfully deleted");
        window.location.reload();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <CommonSection title={"All Users"} />
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading .....</h4>}
          {error && <h4 className="text-center pt-5">{error.message}</h4>}

          {!loading && !error && (
            <Row>
              <Col lg="12">
                {filteredUsers.length > 0 && (
                  <table className="table">
                    <thead>
                      <tr>
                        {Object.keys(filteredUsers[0]).map((key) => (
                          <th key={key} scope="col">{key}</th>
                        ))}
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user._id}>
                          {Object.values(user).map((value, index) => (
                            <td key={index}>{value}</td>
                          ))}
                          <td>
                            <button onClick={() => deleteUser(user._id)} className='btn btn-danger'>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
}
