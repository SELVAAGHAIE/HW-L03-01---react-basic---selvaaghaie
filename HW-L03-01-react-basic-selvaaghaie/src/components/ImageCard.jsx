
import ProfileCard from './ProfileCard';
import image  from '../assets/img_avatar.png';
import styles from './ImageCard.module.css'
export const ImageCard = () => {
  return (
<div className={styles.cardContainer}>
<img className={styles.ImageCardImg} src={image}/>
<ProfileCard person={{ name: 'John Doe', title: 'Frontend Developer',bio:'Passionate about building web applications with React' }}/>
</div>
  );
}
export default ImageCard;
