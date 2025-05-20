import styles from './UserAvatar.module.css';

const UserAvatar = ({ src, alt, size = '60px' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.avatar}
      style={{ width: size, height: size }}
    />
  );
};

export default UserAvatar;