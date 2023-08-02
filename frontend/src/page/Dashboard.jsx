import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../redux/userAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.allUser)
  useEffect(() => {
    dispatch(getAllUser())
  }, [])
  return (
    <>
      <div className="container mt-5">
        <table class="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name </th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          {
            auth && auth.map((item, i) => {
              return <>

                <tbody>
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button type="button" class="btn btn-primary">Edite</button>
                      <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                  </tr>

                </tbody>
              </>
            })
          }
        </table>
      </div>
    </>
  )
}

export default Dashboard