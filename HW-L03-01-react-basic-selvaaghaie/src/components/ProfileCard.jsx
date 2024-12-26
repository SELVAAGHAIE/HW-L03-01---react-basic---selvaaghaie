/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import styles from './ProfileCard.module.css'
export const ProfileCard = (props) => {
  return (
<ul className={styles.ProfileCardList}>
    <li className={styles.ProfileCardListItem} style={{fontWeight:"bolder"}}>name : {props.person.name}</li>
    <li className={styles.ProfileCardListItem}>title : {props.person.title}</li>
     <li className={styles.ProfileCardListItem}>bio : {props.person.bio}</li>
</ul>
  )
}

export default ProfileCard;
