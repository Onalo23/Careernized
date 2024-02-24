import { useEffect } from 'react'
import { useNavigate } from '../component/NavMain'
import { useSelector, useDispatch } from 'react-redux'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { hobby, isLoading, isError, message } = useSelector(
    (state) => state.hobby
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getHobby())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Hobby Dashboard</p>
      </section>

      <HobbyForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='Hobbies'>
            {hobbies.map((hobby) => (
              <Hobby key={Hobby._id} hobby={hobby} />
            ))}
          </div>
        ) : (
          <h3>You have not set any hobby</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
