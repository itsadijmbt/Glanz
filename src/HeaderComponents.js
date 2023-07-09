import './HeaderComponents.css'

function HeaderComponents(props)
{
  return(
  <div>
    <h2 className={props.c}>{props.name}</h2>
  </div>

  )

}
export default HeaderComponents