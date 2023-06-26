import sad from "../../images/Sad.svg";
function NotFound() {
  return (
    <section>
      <div className='not-found'>
        <h2 className='not-found__title'>Ошибка 404</h2>
        <p className='not-found__text'>К сожалению данная страница не доступна.</p>
        <img width="200px"
             src={sad} alt="sad"/>
      </div>

    </section>
  )
}

export default NotFound